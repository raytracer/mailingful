import { h, Component } from 'preact';
import { Mailingful as m } from '../../api/types';
import { API } from '../../api/api';
import { from, formheading } from './style.css'
import '../../../node_modules/simplemde/dist/simplemde.min.css';
import { Redirect } from 'react-router'
import { attachments } from '../mail/style.css';
import { Utils } from '../../util';
import { transform } from 'space-lift/es/transform';

interface ComposeProps {
    routeProps?: any;
}

interface ComposeState {
    envelope: m.Envelope;
    accounts: Array<m.ExternalAccount>;
    redirect: boolean;
    attachments: Array<m.Attachment>;
    later: boolean
}

const regexpDate = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
const regexpTime = /^(\d\d):(\d\d)$/;

export default class Compose extends Component<ComposeProps, ComposeState> {
    editor: any;
    SimpleMDE: any;

    constructor(props: ComposeProps) {
        super(props);
        let id = "";
        if (props.routeProps) {
            id = props.routeProps.match.params.id;
        }
        this.setState({
            envelope: {
                BCC: "",
                CC: "",
                Subject: "",
                Date: (new Date()).toISOString(),
                From: "",
                Id: id,
                InReplyTo: "",
                MessageId: `<${Utils.uuidv4()}@mailingful.com>`,
                Seen: true,
                To: "",
                Size: 0,
                S3Key: ""
            },
            accounts: [],
            redirect: false,
            attachments: [],
            later: false
        });
    }

    private saveDraft = async () => {
        let markdown = this.editor.value();
        let html = this.SimpleMDE.prototype.markdown(markdown);

        let response = await API.saveDraft({ Attachments: [], Mail: this.state.envelope, HTMLBody: html, TextBody: markdown });
        if (response.isOk()) {
            let newEnvelope = { ...this.state.envelope };
            newEnvelope.Id = response.get().Payload;
            this.setState({ envelope: newEnvelope });
        } else {
            console.log(response.get());
        }
    }

    private sendDraft = async () => {
        await this.saveDraft();
        if (this.state.envelope.Id) {
            if (this.state.later) {
                let response = await API.scheduleDraft({ MailId: this.state.envelope.Id });
                if (response.isOk()) {
                    this.setState({ redirect: true });
                } else {
                    console.log(response.get());
                }
            } else {
                let response = await API.sendDraft({ MailId: this.state.envelope.Id });
                if (response.isOk()) {
                    this.setState({ redirect: true });
                } else {
                    console.log(response.get());
                }
            }
        }
    }

    private updateSubject = (event: Event) => {
        let newEnvelope = { ...this.state.envelope };
        newEnvelope.Subject = (event.target as any).value;
        this.setState({ envelope: newEnvelope });
    }

    private updateFrom(from: string) {
        let newEnvelope = { ...this.state.envelope };
        newEnvelope.From = from;
        this.setState({ envelope: newEnvelope });
    }

    async componentDidMount() {
        this.SimpleMDE = await import('../../../node_modules/simplemde/dist/simplemde.min.js')
        this.editor = new this.SimpleMDE();
        let response = await API.getExternalAccounts();
        if (response.isOk()) {
            let accounts: Array<m.ExternalAccount> = response.get().Payload;
            this.setState({ accounts: accounts });
            if (accounts.length > 0) {
                this.updateFrom(accounts[0].Username);
            }
        }

        if (this.state.envelope.Id) {
            let body = await API.getMailContent({ MailId: this.state.envelope.Id })
            if (body.isOk()) {
                this.setState({ attachments: body.get().Payload.Attachments });
                this.editor.value(body.get().Payload.TextBody);
            }
            let envelope = await API.getEnvelope({ MailId: this.state.envelope.Id });
            if (envelope.isOk()) {
                let e = envelope.get().Payload
                this.setState({ envelope: e, later: (new Date()) < new Date(e.Date) });
            }
        }
    }

    deleteAttachment = async (index: number, s3Key: string) => {
        let response = await API.deleteAttachment({ MailId: this.state.envelope.Id, S3Key: s3Key });
        if (response.isOk() && response.get().Payload) {
            let newAttachments = [...this.state.attachments];
            newAttachments.splice(index, 1);
            this.setState({ attachments: newAttachments });
        }
    }

    uploadAttachment = (files: FileList) => {
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let reader = new FileReader();

            reader.onload = ((content) => {
                return async (e: any) => {
                    let data = e.target.result.split(",")[1];
                    let attachment = {
                        MimeType: content.type,
                        S3Key: "",
                        Name: content.name,
                        Size: content.size
                    };

                    let response = await API.insertAttachment({
                        Data: data,
                        MailId: this.state.envelope.Id,
                        Attachment: attachment
                    });

                    if (response.isOk()) {
                        let newAttachments = [...this.state.attachments];
                        attachment.S3Key = response.get().Payload;
                        newAttachments.push(attachment);
                        this.setState({ attachments: newAttachments });
                    }
                }
            })(file);

            reader.readAsDataURL(file);
        }
    }

    renderAttachments(attachments: Array<m.Attachment>) {
        return (
            <ul>
                {attachments.map((attachment, index) => {
                    return (
                        <li>{attachment.Name} - <button onClick={() => this.deleteAttachment(index, attachment.S3Key)}>Delete</button></li>
                    );
                })}
            </ul>
        )
    }

    private updateDate = (e: Event) => {
        let match = regexpDate.exec((e.target as any).value)
        console.log((e.target as any).value);
        if (match) {
            let [year, month, day] = [match[1], match[2], match[3]]
            let newEnvelope = { ...this.state.envelope };
            let date = (new Date(newEnvelope.Date))
            date.setFullYear(+year);
            date.setMonth((+month) - 1);
            date.setDate(+day);
            console.log(date);
            newEnvelope.Date = date.toISOString();
            this.setState({ envelope: newEnvelope });
        }
    }

    private updateTime = (e: Event) => {
        let match = regexpTime.exec((e.target as any).value)
        if (match) {
            let [hour, minute] = [match[1], match[2]]
            let newEnvelope = { ...this.state.envelope };
            let date = (new Date(newEnvelope.Date))
            date.setHours(+hour)
            date.setMinutes(+minute)
            newEnvelope.Date = date.toISOString();
            this.setState({ envelope: newEnvelope });
        }
    }

    renderLater(state: ComposeState) {
        let t = (n: number) => ("" + n).padStart(2, "0");
        if (this.state.later) {
            let date = new Date(state.envelope.Date);
            return (
                <div>
                    <input value={`${date.getFullYear()}-${t(date.getMonth() + 1)}-${t(date.getDate())}`} onChange={this.updateDate} type="date"></input>
                    <input value={`${t(date.getHours())}:${t(date.getMinutes())}`} onChange={this.updateTime} type="time"></input>
                </div>
            );
        }
    }

    render(props: ComposeProps, state: ComposeState) {
        let accounts = this.state.accounts.map(account => <option value={account.Username}>{account.Username}</option>);
        if (this.state.redirect) {
            return <Redirect to="/mailbox/folder/inbox"></Redirect>;
        }
        return (
            <div>
                <h4>New Mail</h4>
                <div className={from}>
                    <label>From: </label>
                    <select onChange={(e) => this.updateFrom((e.target as any).value)}>
                        {accounts}
                    </select>
                </div>
                <input placeholder="To" onChange={(e) => this.state.envelope.To = (e.target as any).value} value={this.state.envelope.To}></input>
                <input placeholder="Cc" onChange={(e) => this.state.envelope.CC = (e.target as any).value} value={this.state.envelope.CC}></input>
                <input placeholder="Bcc" onChange={(e) => this.state.envelope.BCC = (e.target as any).value} value={this.state.envelope.BCC}></input>
                <input type="text" placeholder="Subject" onChange={this.updateSubject} value={this.state.envelope.Subject}></input>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <label for="later" class={formheading}><input id="later" onChange={e => this.setState({ later: (e.target as any).checked })} checked={this.state.later} type="checkbox"></input> Later</label>
                    {this.renderLater(state)}
                </div>
                <div>
                    <h4>Attachments</h4>
                    <input disabled={state.envelope.Id === ""} onChange={e => this.uploadAttachment((e.target as any).files)} type="file" id="files" name="files[]" multiple />
                </div>
                {this.renderAttachments(state.attachments)}
                <button onClick={this.saveDraft}>Save</button>
                <button onClick={this.sendDraft}>Send</button>
            </div>
        );
    }
}
