import { FASTElement, css, customElement, html } from '@microsoft/fast-element';

const template = html<AppContainer>`
	<div class="Container">
		<slot></slot>
	</div>
`;

const styles = css`
	.Container {
		padding: 0 16px;
		max-width: 576px;
		margin: 0 auto;
	}
`;

@customElement({
	name: 'app-container',
	template,
	styles,
})
export class AppContainer extends FASTElement {}
