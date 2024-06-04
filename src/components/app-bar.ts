import { FASTElement, customElement, html } from '@microsoft/fast-element';
import { fileIcon } from '../lib/icons';
import { css } from '../lib/fast';

const styles = css`
	.AppBar {
		padding: 1.2rem 0.4rem;
		color: var(--color-text-on-primary-dark);
	}

	.AppBar__title {
		font-size: 1.25rem;
		line-height: 1.875rem;
		font-weight: 500;
	}
`;

const template = html<AppBar>`
	<header class="AppBar">
		<app-container>
			<icon-adornment icon="${fileIcon}">
				<h1 class="AppBar__title">Notes</h1>
			</icon-adornment>
		</app-container>
	</header>
`;

@customElement({
	name: 'app-bar',
	template,
	styles,
})
export class AppBar extends FASTElement {}
