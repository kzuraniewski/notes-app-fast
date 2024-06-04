import { html } from '@microsoft/fast-element';
import { editIcon, deleteIcon } from '../../lib/icons';
import { NoteCard } from './note-card';

const template = html<NoteCard>`
	<div class="NoteCard">
		<div class="NoteCard__header">
			<h2 class="NoteCard__title">${(x) => x.title}</h2>

			<div class="NoteCard__actions">
				<button
					class="NoteCard__action"
					@click=${(x) => x.$emit('edit')}
				>
					<img src="${editIcon}" role="presentation" />
				</button>

				<button
					class="NoteCard__action"
					@click="${(x) => x.$emit('delete')}"
				>
					<img src="${deleteIcon}" role="presentation" />
				</button>
			</div>
		</div>

		<p class="NoteCard__body">${(x) => x.content}</p>

		<div class="NoteCard__date">${(x) => x.createdAt}</div>
	</div>
`;

export default template;
