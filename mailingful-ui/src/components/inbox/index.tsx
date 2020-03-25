import { h, Component } from 'preact';
import lift, { Option, Some, None } from 'space-lift';
import { API } from '../../api/api';
import { Mailingful as m } from '../../api/types';
import Mail from '../mail';
import 'space-lift/es/all'
import { Utils } from '../../util';
import dayjs from 'dayjs'
import * as Mitt from 'mitt/dist/mitt.umd';
import { Emitter } from 'mitt';

interface InboxProps {
    searchTerm: string
    routeProps: any
}

interface InboxState {
    mails: Array<m.EnvelopeWithLabels>
    tree: Array<ThreadNode>
}

class ThreadNode {
    public readonly mail: m.EnvelopeWithLabels
    public readonly hasChild: boolean
    public readonly child: Option<ThreadNode>

    constructor(mail: m.EnvelopeWithLabels, hasChild: boolean, child: Option<ThreadNode>) {
        this.mail = mail;
        this.hasChild = hasChild;
        this.child = child;
    }
}

export default class Inbox extends Component<InboxProps, InboxState> {
    private readonly emitter: Emitter = new Mitt() as Emitter;
    private folder: string;
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    constructor(props: InboxProps) {
        super(props);
        this.state = { mails: [], tree: [] };
        this.folder = props.routeProps.match.params.folder;
        this.emitter.on("reload", () => this.reloadEmails());
        this.reloadEmails();
    }

    private static constructNode(mail: m.EnvelopeWithLabels, mails: Array<m.EnvelopeWithLabels>, tempMails: Array<m.EnvelopeWithLabels>): ThreadNode {
        let node: ThreadNode;

        if (mail.Envelope.InReplyTo) {
            let target = lift(mails).find((m, i) => m.Envelope.MessageId === mail.Envelope.InReplyTo);
            if (target.isDefined()) {
                node = new ThreadNode(mail, true, Some(Inbox.constructNode(target.get(), mails, tempMails)));
            } else {
                node = new ThreadNode(mail, true, None);
            }
        } else {
            node = new ThreadNode(mail, false, None);
        }

        let index = lift(tempMails).findIndex((m, i) => m.Envelope.Id === mail.Envelope.Id);
        index.forEach(i => tempMails.splice(i, 1));

        return node;
    }

    private static listToTree(mails: Array<m.EnvelopeWithLabels>): Array<ThreadNode> {
        let tempMails = mails.slice();
        let result: Array<ThreadNode> = [];

        let next = lift(tempMails).first()
        while (next.isDefined()) {
            result.push(Inbox.constructNode(next.get(), mails, tempMails))
            next = lift(tempMails).first()
        }

        return result;
    }

    async reloadEmails() {
        let response = await API.getMails({ Label: "folder:" + this.folder, SearchTerm: this.props.searchTerm });
        if (response.isOk()) {
            let mails = response.get().Payload;
            this.setState({ mails: mails, tree: Inbox.listToTree(mails) });
        } else {
            console.log(response.get());
        }
    }

    componentWillReceiveProps(props: InboxProps) {
        this.props = props;
        this.folder = props.routeProps.match.params.folder;
        this.reloadEmails();
    }

    private renderMails(props: InboxProps, state: InboxState) {
        let today: Array<m.EnvelopeWithLabels> = [];
        let yesterday: Array<m.EnvelopeWithLabels> = [];
        let months: { [month: string]: Array<m.EnvelopeWithLabels> } = {};

        for (let mail of state.mails) {
            let date = new Date(mail.Envelope.Date);
            if (Utils.isToday(date)) {
                today.push(mail);
            } else if (Utils.isYesterday(date)) {
                yesterday.push(mail);
            } else {
                let month = new Date(date.getFullYear(), date.getMonth()).toISOString();
                if (months[month]) {
                    months[month].push(mail);
                } else {
                    months[month] = [mail];
                }
            }
        }

        let toMails = (mails: Array<m.EnvelopeWithLabels>, heading: string) => {
            let m = mails.map(mail => {
                return <Mail envelope={mail} emitter={this.emitter}></Mail>;
            });

            return (
                <div>
                    <h4>{heading}</h4>
                    {m}
                </div>
            );
        }

        let todayMails = toMails(today, "Today");
        let yersterdayMails = toMails(yesterday, "Yesterday");
        let monthMails = Object.keys(months).sort().reverse().map(month => {
            let monthName = dayjs(month).format("MMMM YYYY");
            return toMails(months[month], monthName);
        });

        return (
            <div>
                {today.length > 0 ? todayMails : null}
                {yesterday.length > 0 ? yersterdayMails : null}
                {monthMails}
            </div>);
    }

    render(props: InboxProps, state: InboxState) {
        return (
            <div>
                <div>
                    {this.renderMails(props, state)}
                </div>
            </div>
        );
    }
}
