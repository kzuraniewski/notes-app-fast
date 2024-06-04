import {
	FASTElement,
	attr,
	customElement,
	html,
} from '@microsoft/fast-element';
import { searchIcon } from '../lib/icons';
import { css } from '../lib/fast';

const template = html<TextField>`
	<div class="TextField">
		<icon-adornment icon="${searchIcon}">
			<input
				type="text"
				id="search-bar"
				class="TextField__input"
				placeholder="Search notes..."
			/>
		</icon-adornment>
	</div>
`;

const styles = css`
	.TextField {
		width: 100%;
		padding: 8px 12px;
		margin-bottom: 1.5rem;
		border-radius: var(--border-radius);
		background-color: var(--color-primary-muted);
	}

	.TextField__input {
		width: 100%;
		border: none;
		background-color: transparent;
	}
`;

@customElement({
	name: 'text-field',
	template,
	styles,
})
export class TextField extends FASTElement {
	@attr placeholder: string = '';
}
