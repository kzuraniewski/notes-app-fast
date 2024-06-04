import { FASTElement, customElement, html } from '@microsoft/fast-element';
import './components';
import { css } from './lib/fast';
import { addIcon, fileIcon, infoIcon, searchIcon } from './icons';

const template = html<AppRoot>`
	<div id="app">
		<header class="AppBar">
			<div class="Container">
				<div class="IconAdornment">
					<img src="${fileIcon}" role="presentation" />

					<h1 class="ViewTitle">Notes</h1>
				</div>
			</div>
		</header>

		<main class="AppContent">
			<div class="Container">
				<div class="TextField">
					<div class="IconAdornment">
						<img src="${searchIcon}" role="presentation" />

						<input
							type="text"
							id="search-bar"
							class="TextField__input"
							placeholder="Search notes..."
						/>
					</div>
				</div>

				<button class="Button Button--full" id="add-note">
					Add new
				</button>

				<div
					class="CompositionPanel screen-wide hidden"
					id="note-composition-panel"
				>
					<div class="Container">
						<div class="CompositionPanel__header">
							<h2 class="CompositionPanel__title">
								Add new note
							</h2>

							<button
								class="Button Button--text"
								id="note-composition-panel-cancel"
							>
								Cancel
							</button>
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

								<button
									class="Button CompositionPanel__submit-button"
									id="note-composition-panel-add-button"
									disabled
								>
									Add
								</button>
							</div>
						</div>
					</div>
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

						<button
							class="Button Button--secondary"
							id="disclaimer-button"
						>
							<div class="IconAdornment">
								<img src="${addIcon}" role="presentation" />

								Add note
							</div>
						</button>
					</div>

					<ul class="NotePanel__list" id="note-renderer"></ul>
				</div>
			</div>
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
