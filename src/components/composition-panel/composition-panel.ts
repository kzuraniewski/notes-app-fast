import {
	FASTElement,
	attr,
	customElement,
	observable,
} from '@microsoft/fast-element';

import template from './composition-panel.template';
import styles from './composition-panel.styles';
import { CompositionMode, modeConverter } from './composition-panel.utils';

@customElement({
	name: 'composition-panel',
	template,
	styles,
})
export class CompositionPanel extends FASTElement {
	@attr({ converter: modeConverter }) mode: CompositionMode = 'edit';

	@observable titleInput: string = '';
	@observable description: string = '';
	@observable valid: boolean = false;

	validate() {
		const isAnyEmpty = this.description === '' || this.titleInput === '';
		this.valid = !isAnyEmpty;
	}

	handleCancel() {
		this.titleInput = '';
		this.description = '';
		this.$emit('cancel');
	}

	handleAdd() {
		this.$emit('add');
	}

	connectedCallback() {
		super.connectedCallback();
		this.validate();
	}

	titleInputChanged() {
		this.validate();
	}

	descriptionChanged() {
		this.validate();
	}
}
