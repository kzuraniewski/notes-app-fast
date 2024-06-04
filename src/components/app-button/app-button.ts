import { FASTElement, attr, customElement } from '@microsoft/fast-element';
import template from './app-button.template';
import styles from './app-button.styles';
import { ButtonVariant, variantConverter } from './app-button.utils';

@customElement({
	name: 'app-button',
	template,
	styles,
})
export class AppButton extends FASTElement {
	@attr({ converter: variantConverter }) variant: ButtonVariant = 'primary';
	@attr({ mode: 'boolean' }) full: boolean = false;
	@attr({ mode: 'boolean' }) disabled: boolean = false;
}
