import {
	FASTElement,
	customElement,
	html,
	observable,
	when,
} from '@microsoft/fast-element';
import './components';
import { css } from './lib/fast';
import { addIcon, infoIcon } from './icons';

const template = html<AppRoot>`
	<div id="app">
		<app-bar></app-bar>

		<main class="AppContent">
			<app-container>
				<text-field placeholder="Search notes..."></text-field>

				${when(
					(x) => !x.isCompositionMode,
					html<AppRoot>`
						<app-button full @click="${(x) => x.queryNewNote()}">
							Add new
						</app-button>
					`
				)}

				<composition-panel
					mode="${(x) => (x.isCompositionMode ? 'edit' : 'closed')}"
					@cancel="${(x) => x.closeComposition()}"
				></composition-panel>

				<div class="NotePanel">
					<div class="Disclaimer hidden" id="empty-disclaimer">
						<div class="CircledIcon Disclaimer__icon">
							<div class="CircledIcon__inner">
								<img
									class="CircledIcon__icon"
									src="${infoIcon}"
									role="presentation"
								/>
							</div>
						</div>

						<h2 class="Disclaimer__title">No notes yet</h2>

						<p class="Disclaimer__description">
							Add a note to keep track of your learnings.
						</p>

						<app-button variant="secondary" id="disclaimer-button">
							<icon-adornment icon="${addIcon}">
								Add note
							</icon-adornment>
						</app-button>
					</div>

					<ul class="NotePanel__list" id="note-renderer"></ul>
				</div>
			</app-container>
		</main>
	</div>
`;

const styles = css``;

@customElement({
	name: 'app-root',
	template,
	styles,
})
export class AppRoot extends FASTElement {
	@observable isCompositionMode: boolean = false;

	closeComposition() {
		this.isCompositionMode = false;
	}

	queryNewNote() {
		this.isCompositionMode = true;
	}

	addNote(note) {
		console.log('new note', note);
	}
}
