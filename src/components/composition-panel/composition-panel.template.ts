import { html } from '@microsoft/fast-element';
import classNames from 'classnames';
import { CompositionPanel } from './composition-panel';

const template = html<CompositionPanel>`
	<div
		class="${(x) =>
			classNames([
				'CompositionPanel screen-wide',
				{ hidden: x.mode === 'closed' },
			])}"
	>
		<app-container>
			<div class="CompositionPanel__header">
				<h2 class="CompositionPanel__title">Add new note</h2>

				<app-button variant="text" @click="${(x) => x.handleCancel()}">
					Cancel
				</app-button>
			</div>

			<div class="CompositionPanel__form">
				<input
					class="CompositionPanel__field"
					type="text"
					placeholder="Note title..."
					:value="${(x) => x.titleInput}"
					@input="${(x, c) => (x.titleInput = c.event.target?.value)}"
				/>

				<div class="CompositionPanel__submit-field">
					<textarea
						class="CompositionPanel__field"
						placeholder="Type your note..."
						:value="${(x) => x.description}"
						@input="${(x, c) =>
							(x.description = c.event.target?.value)}"
					></textarea>

					<app-button
						class="CompositionPanel__submit-button"
						?disabled="${(x) => !x.valid}"
						@click="${(x) => x.handleAdd()}"
					>
						Add
					</app-button>
				</div>
			</div>
		</app-container>
	</div>
`;

export default template;
