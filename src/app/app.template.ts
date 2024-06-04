import { html, when, repeat } from '@microsoft/fast-element';
import { addIcon } from '../lib/icons';
import Note from '../models/note';
import { AppRoot } from './app';
import { getCompositionMode } from './app.utils';

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
							(x) => html<Note>`
								<note-card
									title="${(note) => note.title}"
									content="${(note) => note.content}"
									@delete="${(note) => x.deleteNote(note)}"
								></note-card>
							`
						)}
					</ul>
				</div>
			</app-container>
		</main>
	</div>
`;

export default template;
