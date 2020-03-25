import { h, Component } from 'preact';
import Inbox from '../../components/inbox'
import Compose from '../../components/compose';
import { API } from '../../api/api';
import { Switch, NavLink, Route, Redirect } from 'react-router-dom';
import * as style from './style.css';

interface MailboxProps {
}

interface Folder {
	label: string
	name: string
}

interface MailboxState {
	folders: Array<Folder>
	toCompose: boolean
	searchTerm: string
}

export default class Mailbox extends Component<MailboxProps, MailboxState> {
	constructor() {
		super();
		this.state = {
			folders: [{ label: "folder:inbox", name: "Inbox" },
			{ label: "folder:trash", name: "Trash" },
			{ label: "folder:draft", name: "Drafts" },
			{ label: "folder:scheduled", name: "Scheduled" },
			{ label: "folder:sent", name: "Sent" },
			{ label: "folder:spam", name: "Spam" }
			], toCompose: false, searchTerm: ""
		}
	}

	componentDidMount() {
		setInterval(() => {
			API.refreshToken();
		}, 1200000);
	}

	compose() {

	}

	componentWillUnmount() {
	}

	folders = (state: MailboxState) => {
		return state.folders.map(folder => { return <li><NavLink activeClassName={style.active} to={"/mailbox/" + folder.label.split(":").join("/")}>{folder.name}</NavLink></li> });
	}

	searchTermChange = (event: Event) => {
		let searchTerm = ((event.target as any).value);
		this.setState({ searchTerm: searchTerm });
	}

	render(props: MailboxProps, state: MailboxState) {
		const ButtonToNavigate = ({ title, history }) => (
			<button
				type="button"
				className={style.inputheight}
				onClick={() => history.push('/mailbox/compose')}
			>
				{title}
			</button>
		);

		const SomeComponent = () => (
			<Route path="/" render={(props) => <ButtonToNavigate {...props} title="Compose" />} />
		)

		return (
			<div class={style.mailbox}>
				<div class={style.sidebar}>
					<SomeComponent />
					<nav class="menu">
						<ul>
							{this.folders(state)}
						</ul>
						<ul>
							<li><a href="/login" onClick={(e) => API.eraseCookie("token")}>Logout</a></li>
						</ul>
					</nav>
				</div>
				<div class={style.main}>
					<input type="search" class={[style.searchbox, style.inputheight].join(" ")} value={state.searchTerm} onSearch={(e) => this.searchTermChange(e)} placeholder="Suche..."></input>
					<Switch>
						<Route exact path="/mailbox" render={() => (
							<Redirect to="/mailbox/folder/inbox" />
						)} />
						<Route path='/mailbox/folder/:folder' render={(routeProps) => <Inbox routeProps={routeProps} searchTerm={state.searchTerm}></Inbox>} />
						<Route exact path='/mailbox/compose' component={Compose} />
						<Route path='/mailbox/compose/:id' render={(routeProps) => <Compose routeProps={routeProps}></Compose>} />
					</Switch>
				</div>
			</div>
		);
	}
}