import {
	FASTElement,
	attr,
	customElement,
	html,
} from '@microsoft/fast-element';
import { css } from '../lib/fast';

const template = html<CircledIcon>`
	<div class="CircledIcon">
		<div class="CircledIcon__inner">
			<img
				class="CircledIcon__icon"
				src="${(x) => x.icon}"
				role="presentation"
			/>
		</div>
	</div>
`;

const styles = css`
	.CircledIcon {
		position: relative;
		width: 64px;
		aspect-ratio: 1;
		background-color: var(--color-primary-muted);
		border-radius: 50%;
	}

	.CircledIcon__inner {
		width: 85%;
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: var(--color-text-on-primary-dark);
	}

	.CircledIcon__inner,
	.CircledIcon__icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

@customElement({
	name: 'circled-icon',
	template,
	styles,
})
export class CircledIcon extends FASTElement {
	@attr icon: string = '';
}
