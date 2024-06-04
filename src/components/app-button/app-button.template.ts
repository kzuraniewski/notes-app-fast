import { html } from '@microsoft/fast-element';
import { AppButton } from './app-button';
import classNames from 'classnames';

const template = html<AppButton>`
	<button
		class="${(x) =>
			classNames([
				'Button',
				{ 'Button--secondary': x.variant === 'secondary' },
				{ 'Button--text': x.variant === 'text' },
				{ 'Button--full': x.full },
			])}"
		?disabled="${(x) => x.disabled}"
	>
		<slot></slot>
	</button>
`;

export default template;
