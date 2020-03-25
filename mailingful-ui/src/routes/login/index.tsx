import { h, Component } from 'preact';
import { API, Status } from '../../api/api';
import * as style from './style.css';

interface LoginProps {
}

interface LoginState {
	password: string
	email: string
}

export default class Login extends Component<LoginProps, LoginState> {
	constructor(props) {
		super(props);
		this.state = { password: "", email: "" };
	}

	login = async (event) => {
		event.preventDefault();
		let result = await API.login(this.state.email, this.state.password);

		switch (result) {
			case Status.OK:
				(this.props as any).history.push("/mailbox");
				break;
			case Status.NETWORK_ERROR:
				alert("Kein Verbindung!");
				break;
			case Status.BAD_REQUEST:
				alert("Falscher Nutzername/Password");
				break;
		}

		event.preventDefault();
	}

	render(props: LoginProps, state: LoginState) {
		return (
			<div class={style.login}>
				<form onSubmit={this.login}>
					<label for="email">E-Mail</label>
					<input type="text" value={state.email} onChange={(event) => this.setState({ email: (event.target as any).value })} id="email" />
					<label for="password">Password</label>
					<input type="password" value={state.password} onChange={(event) => this.setState({ password: (event.target as any).value })} id="password" />
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
}
