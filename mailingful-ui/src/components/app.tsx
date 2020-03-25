import { h, Component } from 'preact';
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom'
import { API } from '../api/api';
import { IntlProvider } from 'preact-i18n';
import { definition } from './lang/en';

import Login from '../routes/login';
import Home from '../routes/home';
import FAQ from '../routes/faq';
import Mailbox from '../routes/mailbox';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
	require('preact/debug');
}

interface AppProps { }
interface AppState { }

export default class App extends Component<AppProps, AppState> {
	constructor(props) {
		super(props);
	}

	render() {
		let content =
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/faq' component={FAQ} />
				<Route path='/mailbox' component={Mailbox} />
				<Route path='/login' component={Login} />
			</Switch>;

		if (!(typeof process === 'object' && process + '' === '[object process]')) {
			return (
				<IntlProvider definition={definition}>
					<div id="app">
						<BrowserRouter>
							{content}
						</BrowserRouter>
					</div>
				</IntlProvider>
			);
		} else {
			return (
				<IntlProvider definition={definition}>
					<div id="app">
						<StaticRouter>
							{content}
						</StaticRouter>
					</div>
				</IntlProvider>
			);
		}
	}
}
