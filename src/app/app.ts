import {
	FASTElement,
	customElement,
	observable,
} from '@microsoft/fast-element';
import '../components';
import { css } from '../lib/fast';
import Note from '../models/note';
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

	editNote(note: Note) {
		this.viewMode = 'edit';
	}

	deleteNote(note: Note) {
		const noteIndex = this.notes.indexOf(note);

		if (noteIndex === -1) {
			throw new Error(`Note is not applicable`);
		}

		this.notes.splice(noteIndex, 1);
	}
}
