import {
	FASTElement,
	attr,
	css,
	customElement,
	html,
} from '@microsoft/fast-element';

const template = html<IconAdornment>`
	<div class="IconAdornment">
		<img src="${(x) => x.icon}" role="presentation" />

		<slot></slot>
	</div>
`;

const styles = css`
	.IconAdornment {
		display: flex;
		gap: 0.7rem;
		align-items: center;
	}
`;

@customElement({
	name: 'icon-adornment',
	template,
	styles,
})
export class IconAdornment extends FASTElement {
	@attr icon: string = '';
}
