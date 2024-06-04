import { FASTElement, attr, customElement } from '@microsoft/fast-element';
import styles from './note-card.styles';
import template from './note-card.template';

@customElement({
	name: 'note-card',
	template,
	styles,
})
export class NoteCard extends FASTElement {
	@attr title: string = '';
	@attr content: string = '';
	@attr createdAt: string = '';
}
