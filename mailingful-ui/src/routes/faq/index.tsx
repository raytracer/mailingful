import { h, Component } from 'preact';
import Menu from '../../components/menu';
import * as style from './style.css';

interface FAQProps { }
interface FAQState { }

export default class FAQ extends Component<FAQProps, FAQState> {
	render() {
		return (
			<div class={style.faq}>
				<h1>Mailingful - FAQ</h1>
				<Menu></Menu>
				<ul>
					<li>
						<strong>Why did you create mailingful?</strong>
						<p>
							Even before Google announced to phase out inbox I was unhappy with the current state of Inbox:
							<ul>
								<li>Inbox was a bit bloated and slow</li>
								<li>Critical features like the scheduled sending of emails were never going to arrive</li>
								<li>A lot of settings were only accessible through Gmail</li>
								<li>Google interfering with certain attachments (.zip) files on the grounds of them being too "dangerous".</li>
								<li>Small UI Problems that added up (e.g. try to move a mail marked as spam back to your inbox on the desktop version)</li>
							</ul>
						</p>
						<p>
							But Inbox also got a lot of things right:
							<ul>
								<li>Focus on content, don't have multiple tabs like Gmail</li>
								<li>Automatically group emails into categories</li>
								<li>Decent support for threading</li>
							</ul>
						</p>
					</li>
					<li>
						<strong>Will Javascript be required?</strong>
						<p>Yes, for now, Javascript is mandatory. I might reconsider this if there is a strong demand for an HTML-only version.</p>
					</li>
					<li>
						<strong>Pricing</strong>
						<p>The smallest plan will start in the <i>5-10$ per month</i> region. This will not be the cheapest service available and I am ok with that. More details will be announced on our mailing list.</p>
					</li>
					<li>
						<strong>Will there be a free version?</strong>
						<p>There will be a 30-day trial version, but no free version.</p>
					</li>
				</ul>
			</div>
		);
	}
}
