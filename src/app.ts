import { FASTElement, customElement, html } from '@microsoft/fast-element';
import './components';
import './styles/reset.css';
import './styles/main.css';

const template = html<AppRoot>`
	<div id="app">
		<app-bar />
	</div>
`;

@customElement({
	name: 'app-root',
	template,
})
export class AppRoot extends FASTElement {}
