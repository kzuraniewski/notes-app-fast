import { CompositionMode } from '../components/composition-panel/composition-panel.utils';

export type ViewMode = 'edit' | 'add' | 'empty' | 'list';

export const getCompositionMode = (viewMode: ViewMode): CompositionMode => {
	switch (viewMode) {
		case 'add':
			return 'new';
		case 'edit':
			return 'edit';
		default:
			return 'closed';
	}
};

export const mockDate = new Date(966, 4, 14);
