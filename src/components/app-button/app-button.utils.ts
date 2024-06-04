import { ValueConverter } from '@microsoft/fast-element';

export const buttonVariants = ['primary', 'secondary', 'text'] as const;

export type ButtonVariant = (typeof buttonVariants)[number];

export const isButtonVariant = (value: any): value is ButtonVariant => {
	return (buttonVariants as any).includes(value);
};

export const variantConverter: ValueConverter = {
	fromView(value: string): ButtonVariant {
		if (!value) return 'primary';

		if (!isButtonVariant(value)) {
			throw new Error(`Invalid button variant - ${value}`);
		}

		return value;
	},

	toView(value: ButtonVariant) {
		return value;
	},
};
