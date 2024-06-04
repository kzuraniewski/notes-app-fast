import {
	FASTElement,
	customElement,
	observable,
} from '@microsoft/fast-element';
import '../components';
import { css } from '../lib/fast';
import Note from '../note';
import template from './app.template';
import { ViewMode, mockDate } from './app.utils';

const styles = css``;

@customElement({
	name: 'app-root',
	template,
	styles,
})
export class AppRoot extends FASTElement {
	@observable notes = [
		new Note('Note 1', 'Body 1', mockDate),
		new Note('Note 2', 'Body 2', mockDate),
		new Note('Note 3', 'Body 3', mockDate),
	];
	@observable viewMode: ViewMode = 'list';

	closeComposition() {
		this.viewMode = this.notes.length ? 'list' : 'empty';
	}

	queryNewNote() {
		this.viewMode = 'add';
	}

	addNote(note: Note) {
		console.log('new note', note);
	}
}
