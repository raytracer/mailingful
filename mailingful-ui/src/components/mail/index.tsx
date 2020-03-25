import { h, Component } from 'preact';
import { Option, Some, None } from 'space-lift';
import { API } from '../../api/api';
import { Mailingful as m } from '../../api/types';
import { Route } from 'react-router-dom';
import 'space-lift/es/all'
import * as addressparser from 'addressparser';
import * as classnames from 'classnames'
import * as style from './style.css';
import * as mitt from 'mitt';
import { Utils } from '../../util';

interface MailProps {
    envelope: m.EnvelopeWithLabels
    emitter: mitt.Emitter
}

interface MailState {
    envelope: m.EnvelopeWithLabels,
    content: Option<m.MailContent>
    visible: boolean
}

type Address = { address: string, name: string };

function resizeIframe(obj) {
    obj.style.height = (obj.contentWindow.document.body.scrollHeight + 60) + 'px';
}

export default class Mail extends Component<MailProps, MailState> {
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentWillReceiveProps(props: MailProps) {
        if (this.state.envelope.Envelope.Id !== props.envelope.Envelope.Id) {
            this.setState({ envelope: props.envelope, content: None, visible: false });
        }
    }

    constructor(props: MailProps) {
        super(props);
        this.state = { envelope: props.envelope, content: None, visible: false };
    }

    private static getFrom(from: string): Option<string> {
        let parsed: Array<Address> = addressparser(from);
        if (parsed.length > 0) {
            return Some(parsed[0].name || parsed[0].address);
        } else {
            return None;
        }
    }

    private downloadContent = async (id: string) => {
        let response = await API.getMailContent({ MailId: id });
        if (response.isOk()) {
            this.setState({ content: Some(response.get().Payload), visible: true });

            if (this.state.envelope.Envelope.Seen === false) {
                let result = await API.markSeen({ Seen: true, MailId: id });
                if (result.isOk()) {
                    let copy = { ...this.state.envelope };
                    copy.Envelope.Seen = true;
                    this.setState({ envelope: copy });
                }
            }
        } else {
            console.log(response.get());
        }
    }

    private toggleContent = () => {
        if (!this.state.content.isDefined()) {
            this.downloadContent(this.state.envelope.Envelope.Id);
        } else {
            this.setState({ visible: !this.state.visible })
        }
    }

    private downloadAttachment = (attachment: m.Attachment) => {
        let url = `${API.ORIGIN}/attachments/download/${encodeURIComponent(attachment.S3Key)}`;
        window.open(url);
    }

    private deleteMail = async () => {
        let result = await API.moveToFolder({ MailIds: [this.state.envelope.Envelope.Id], FolderName: "trash" });
        if (!result.isOk()) {
            console.error(result.get());
        } else {
            this.props.emitter.emit("reload");
        }
    }

    private replyTo = async () => {
        if (this.state.content.isDefined()) {
            let body = this.state.content.get().HtmlBody || this.state.content.get().TextBody;
            let textBody = body.split('\n').map(line => "> " + line).join('\n');
            let responseAccounts = await API.getExternalAccounts();

            if (responseAccounts.isOk()) {
                let accounts = responseAccounts.get().Payload;
                let oldFrom: Array<Address> = addressparser(this.props.envelope.Envelope.From);
                let oldTo: Array<Address> = addressparser(this.props.envelope.Envelope.To);
                let oldCC: Array<Address> = addressparser(this.props.envelope.Envelope.CC);

                let newFrom = oldTo.filter(address => accounts.find(account => account.Username === address.address))[0] ||
                    oldCC.filter(address => accounts.find(account => account.Username === address.address))[0];

                let newCC = oldCC
                    .filter(address => accounts.find(account => account.Username === address.address) === undefined);
                let newTo = oldTo
                    .filter(address => accounts.find(account => account.Username === address.address) === undefined);
                newTo.push(...oldFrom);

                let result = await API.saveDraft({
                    Mail: {
                        Id: "",
                        From: newFrom ? newFrom.address : "",
                        BCC: "",
                        CC: newCC.map(a => a.address).join(","),
                        To: newTo.map(a => a.address).join(","),
                        InReplyTo: this.props.envelope.Envelope.MessageId,
                        MessageId: `<${Utils.uuidv4()}@mailingful.com>`,
                        Date: (new Date()).toISOString(),
                        Seen: true,
                        Subject: `Re: ${this.props.envelope.Envelope.Subject}`,
                        Size: 0,
                        S3Key: ""
                    }, TextBody: textBody, HTMLBody: "", Attachments: []
                });
                if (!result.isOk()) {
                    console.error(result.get());
                } else {
                    window.open(`/mailbox/compose/${result.get().Payload}`);
                }
            }

        }
    }

    private moveToInbox = async () => {
        let result = await API.moveToFolder({ MailIds: [this.state.envelope.Envelope.Id], FolderName: "inbox" });
        if (!result.isOk()) {
            console.error(result.get());
        } else {
            this.props.emitter.emit("reload");
        }
    }

    render(props: MailProps, state: MailState) {
        let seenObj = {
            [style.header]: true
        };
        seenObj[style.unseen] = !state.envelope.Envelope.Seen;
        const ButtonToNavigate = ({ title, history }) => (
            <button
                type="button"
                onClick={() => history.push('/mailbox/compose/' + this.state.envelope.Envelope.Id)}
            >
                {title}
            </button>
        );
        const ComposeButtonComponent = () => (
            <Route path="/" render={(props) => <ButtonToNavigate {...props} title="Edit Draft" />} />
        )
        let names = classnames(seenObj);



        let content = state.visible ? this.state.content.map<JSX.Element | undefined>(mailContent => {
            let attachments = mailContent.Attachments.map(attachment => <span onClick={() => this.downloadAttachment(attachment)} class={style.button}>{attachment.Name}</span>);
            let renderContent = (c: m.MailContent) => {
                if (c.HtmlBody) {
                    return (
                        <iframe sandbox="allow-same-origin allow-popups" onLoad={(e) => resizeIframe(e.target)} srcDoc={mailContent.HtmlBody || mailContent.TextBody}></iframe>
                    );
                } else {
                    return (
                        <p>{mailContent.TextBody}</p>
                    )
                }
            }
            return (
                <div>
                    <div class={style.attachments}>
                        {attachments}
                    </div>
                    <div class={style.attachments}>
                        {this.state.envelope.Labels.indexOf("folder:trash") === -1 ? <button onClick={() => this.deleteMail()}>Delete</button> : null}
                        {this.state.envelope.Labels.indexOf("folder:inbox") !== -1 ? <button onClick={() => this.replyTo()}>Reply</button> : null}
                        {this.state.envelope.Labels.indexOf("folder:inbox") === -1 ? <button onClick={() => this.moveToInbox()}>To Inbox</button> : null}
                        {this.state.envelope.Labels.indexOf("folder:draft") !== -1 ? <ComposeButtonComponent /> : null}
                    </div>
                    {renderContent(mailContent)}
                </div>
            );
        }).getOrElse(undefined) : undefined;
        return (
            <div class={style.envelope}>
                <div className={names} onClick={() => this.toggleContent()} >{(new Date(state.envelope.Envelope.Date)).toLocaleDateString()} - {Mail.getFrom(state.envelope.Envelope.From).getOrElse("unknown")} - {state.envelope.Envelope.Subject}</div>
                {content}
            </div>
        );
    }
}
