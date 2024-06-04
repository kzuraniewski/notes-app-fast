import { FASTElement, customElement, html } from '@microsoft/fast-element';
import './components';
import { css } from './lib/fast';
import { addIcon, infoIcon } from './icons';

const template = html<AppRoot>`
	<div id="app">
		<app-bar></app-bar>

		<main class="AppContent">
			<app-container>
				<text-field placeholder="Search notes..."></text-field>

				<app-button full id="add-note">Add new</app-button>

				<div
					class="CompositionPanel screen-wide hidden"
					id="note-composition-panel"
				>
					<app-container>
						<div class="CompositionPanel__header">
							<h2 class="CompositionPanel__title">
								Add new note
							</h2>

							<app-button
								variant="text"
								id="note-composition-panel-cancel"
							>
								Cancel
							</app-button>
						</div>

						<div class="CompositionPanel__form">
							<input
								class="CompositionPanel__field"
								id="note-composition-panel-title"
								type="text"
								placeholder="Note title..."
							/>

							<div class="CompositionPanel__submit-field">
								<textarea
									class="CompositionPanel__field"
									id="note-composition-panel-content"
									placeholder="Type your note..."
								></textarea>

								<app-button
									class="CompositionPanel__submit-button"
									disabled
									id="note-composition-panel-add-button"
								>
									Add
								</app-button>
							</div>
						</div>
					</app-container>
				</div>

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
export class AppRoot extends FASTElement {}
