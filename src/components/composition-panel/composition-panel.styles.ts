import { css } from '../../lib/fast';

const styles = css`
	.CompositionPanel {
		border-top: 1px;
		border-bottom: 1px;
		border-style: solid;
		border-color: var(--color-primary-muted);
		box-shadow: 0px 0px 16px 0px #00000014;
		padding-top: 1.25rem;
		padding-bottom: 1.25rem;
	}

	.CompositionPanel__form {
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.CompositionPanel__header {
		display: flex;
		justify-content: space-between;
	}

	.CompositionPanel__title {
		font-weight: 500;
	}

	.CompositionPanel__field {
		width: 100%;
		border: 2px solid var(--color-primary-muted);
		border-radius: var(--border-radius);
		padding: 0.625rem 1rem;
		transition: border-color var(--transition);
	}
	textarea.CompositionPanel__field {
		padding-bottom: 1.5rem;
		min-height: 11rem;
	}
	.CompositionPanel__field:focus {
		border-color: var(--color-text-on-primary-dark);
	}

	.CompositionPanel__submit-field {
		position: relative;
	}

	.CompositionPanel__submit-button {
		position: absolute;
		right: 1rem;
		bottom: 1rem;
	}
`;

export default styles;
