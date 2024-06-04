import {
	FASTElement,
	customElement,
	html,
	observable,
	repeat,
	when,
} from '@microsoft/fast-element';
import './components';
import { css } from './lib/fast';
import { CompositionMode } from './components/composition-panel/composition-panel.utils';
import { addIcon } from './lib/icons';
import Note from './note';

type ViewMode = 'edit' | 'add' | 'empty' | 'list';

const getCompositionMode = (viewMode: ViewMode): CompositionMode => {
	switch (viewMode) {
		case 'add':
			return 'new';
		case 'edit':
			return 'edit';
		default:
			return 'closed';
	}
};

const template = html<AppRoot>`
	<div class="App">
		<app-bar></app-bar>

		<main class="AppContent">
			<app-container>
				<text-field placeholder="Search notes..."></text-field>

				${when(
					(x) => x.viewMode === 'list',
					html<AppRoot>`
						<app-button full @click="${(x) => x.queryNewNote()}">
							Add new
						</app-button>
					`
				)}

				<composition-panel
					mode="${(x) => getCompositionMode(x.viewMode)}"
					@cancel="${(x) => x.closeComposition()}"
				></composition-panel>

				<div class="NotePanel">
					<app-disclaimer
						title="No notes yet"
						description="Add a note to keep track of your learnings."
						open="${(x) => x.viewMode === 'empty'}"
					>
						<app-button
							variant="secondary"
							@click="${(x) => x.queryNewNote()}"
						>
							<icon-adornment icon="${addIcon}">
								Add note
							</icon-adornment>
						</app-button>
					</app-disclaimer>

					<ul class="NotePanel__list">
						${repeat(
							(x) => x.notes,
							html<Note>`
								<note-card
									:title=${(x) => x.title}
									:content=${(x) => x.content}
								></note-card>
							`
						)}
					</ul>
				</div>
			</app-container>
		</main>
	</div>
`;

const styles = css``;

const mockDate = new Date(966, 4, 14);

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

	addNote(note) {
		console.log('new note', note);
	}
}
