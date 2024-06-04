const monthAbbreviations = [
	'jan',
	'feb',
	'mar',
	'apr',
	'may',
	'jun',
	'jul',
	'aug',
	'sep',
	'oct',
	'nov',
	'dec',
] as const;

class Note {
	title: string;
	content: string;
	createdAt: Date;

	constructor(
		title: string,
		content: string,
		createdAt = new Date(Date.now())
	) {
		this.title = title;
		this.content = content;
		this.createdAt = createdAt;
	}

	matchFilter(filter: string) {
		const lowercaseFilter = filter.toLowerCase();
		return (
			this.title.toLowerCase().includes(lowercaseFilter) ||
			this.content.toLowerCase().includes(lowercaseFilter) ||
			this.getFormattedDate().toLowerCase().includes(lowercaseFilter)
		);
	}

	getFormattedDate() {
		const month = Note.getMonthAbbreviation(this.createdAt);
		return `${month} ${this.createdAt.getDate()}`;
	}

	private static getMonthAbbreviation(date: Date) {
		const abbreviation = monthAbbreviations[date.getMonth() - 1];

		if (!abbreviation) {
			throw new Error('month abbreviation array is incomplete');
		}

		return abbreviation;
	}
}

export default Note;
