import { h, Component } from 'preact';
import Menu from '../../components/menu';
import { Text } from 'preact-i18n';
import * as style from './style.css';
import { API } from '../../api/api';

interface HomeProps { }
interface HomeState {
	added: boolean
}

export default class Home extends Component<HomeProps, HomeState> {
	added = false

	constructor() {
		super();
		this.state = { added: false };
	}

	promotion = async () => {
		let element = document.getElementById("promotion");
		if (element) {
			let response = await API.insertPromotion({ Email: (element as HTMLInputElement).value });
			if (response.isOk() && response.get().Payload) {
				this.setState({ added: true });
			}
		}
	}

	renderFeatures() {
		let features = [
			"home.features.light-weight",
			"home.features.threads",
			"home.features.labels",
			"home.features.markdown-driven",
			"home.features.scheduling",
			"home.features.non-interfering"
		];
		return <ul>{features.map(feature => <li><strong><Text id={feature + ".short"}></Text></strong> &mdash; <Text id={feature + ".long"}></Text></li>)}</ul>;
	}

	render(props: HomeProps, state: HomeState) {
		let added = state.added ? (<p><Text id="home.added"></Text></p>) : undefined
		return (
			<div class={style.home}>
				<h1><Text id="heading"></Text></h1>
				<Menu></Menu>
				<p><Text id="home.explanation"></Text></p>
				<p><Text id="home.google"></Text></p>
				<h3><Text id="home.features.title"></Text></h3>
				{this.renderFeatures()}
				<p><Text id="home.promotion"></Text></p>
				<form class={style.promotion} onSubmit={(e) => { e.preventDefault(); this.promotion() }}>
					<input placeholder="Your Email" id="promotion" type="email" class={style.fixedheight}></input><button class={style.fixedheight}><Text id="home.notify"></Text></button>
				</form>
				{added}
			</div>
		);
	}
}
