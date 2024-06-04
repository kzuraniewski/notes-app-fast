import { ValueConverter } from '@microsoft/fast-element';

export const compositionModes = ['new', 'edit', 'closed'] as const;

export type CompositionMode = (typeof compositionModes)[number];

export const isCompositionMode = (value: any): value is CompositionMode =>
	compositionModes.includes(value);

export const modeConverter: ValueConverter = {
	fromView(value: string): CompositionMode {
		if (!value) return 'closed';

		if (!isCompositionMode(value)) {
			throw new Error(`Invalid composition mode - ${value}`);
		}

		return value as CompositionMode;
	},

	toView(value: CompositionMode) {
		return value;
	},
};
