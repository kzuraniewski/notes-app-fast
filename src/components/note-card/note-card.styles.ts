import { css } from '../../lib/fast';

const styles = css`
	.NoteCard {
		border-radius: var(--border-radius);
		padding: 0.75rem;
		box-shadow: 0px 4px 16px 0px #00000012;
		font-size: 0.875rem;
	}

	.NoteCard__header {
		display: flex;
		justify-content: space-between;
		align-items: start;
		gap: 1rem;
		margin-bottom: 0.5rem;
	}

	.NoteCard__title {
		font-weight: 500;
		color: var(--color-text-on-primary-dark);
	}

	.NoteCard__title,
	.NoteCard__body {
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.NoteCard__date {
		font-size: 0.75rem;
		margin-top: 0.3rem;
		color: var(--color-text-on-primary-light);
		text-transform: capitalize;
	}

	.NoteCard__actions {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.NoteCard__action {
		background: none;
		border: none;
	}
`;

export default styles;
