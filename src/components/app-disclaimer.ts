import {
	FASTElement,
	attr,
	customElement,
	html,
} from '@microsoft/fast-element';
import { css } from '../lib/fast';
import { infoIcon } from '../lib/icons';
import classNames from 'classnames';

const template = html<AppDisclaimer>`
	<div class="${(x) => classNames('Disclaimer', { hidden: !x.open })}">
		<circled-icon
			class="Disclaimer__icon"
			icon="${infoIcon}"
		></circled-icon>

		<h2 class="Disclaimer__title">${(x) => x.title}</h2>

		<p class="Disclaimer__description">${(x) => x.description}</p>

		<slot></slot>
	</div>
`;

const styles = css`
	.Disclaimer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2.25rem;
	}

	.Disclaimer__icon {
		margin-bottom: 1rem;
	}

	.Disclaimer__title {
		font-weight: 500;
		font-size: 1.25rem;
		line-height: 1.875rem;
		margin-bottom: 0.75rem;
		color: var(--color-text-on-primary-dark);
	}

	.Disclaimer__description {
		text-align: center;
		margin-bottom: 1.5rem;
	}
`;

@customElement({
	name: 'app-disclaimer',
	template,
	styles,
})
export class AppDisclaimer extends FASTElement {
	@attr({ mode: 'boolean' }) open: boolean = true;
	@attr title: string = '';
	@attr description: string = '';
}
