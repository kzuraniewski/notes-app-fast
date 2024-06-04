import { css } from '../../lib/fast';

const styles = css`
	.Button {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: var(--border-radius);
		background-color: var(--color-accent);
		color: var(--color-text-on-accent);
		line-height: 1.5rem;
		font-weight: 500;
		text-transform: capitalize;
		transition: background-color var(--transition);
	}
	.Button:not(:disabled):hover {
		background-color: var(--color-accent-hover);
	}
	.Button:not(:disabled):active {
		background-color: var(--color-accent-active);
	}
	.Button:disabled {
		background-color: var(--color-accent-disabled);
		color: var(--color-text-on-accent-disabled);
	}

	.Button--secondary {
		border: 1px solid var(--color-border);
		background-color: var(--color-primary);
		color: var(--color-text-on-primary-dark);
	}
	.Button--secondary:not(:disabled):hover {
		background-color: var(--color-primary-hover);
	}
	.Button--secondary:not(:disabled):active {
		background-color: var(--color-primary-active);
	}

	.Button--text {
		padding: 0;
		border: none;
		background: none;
		color: var(--color-text-on-primary-anchor);
		font-size: 0.875rem;
		font-weight: 400;
		letter-spacing: 1px;
	}
	.Button--text:not(:disabled):hover {
		background: none;
	}

	.Button--full {
		width: 100%;
	}
`;

export default styles;
