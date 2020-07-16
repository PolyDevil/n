export const SIZE = {
	small: () => `
		font-size: .6rem;
		padding: .3rem .6rem;
	`,
	medium: () => `
		font-size: 1rem;
		padding: .5rem 1rem;
	`,
	large: () => `
		font-size: 1.4rem;
		padding: .7rem 1.4rem;
	`,
};
export const getSize = size => SIZE[size] || SIZE.medium;

export const SHAPE = {
	'square': () => `
		border-radius: 0;
	`,
	'round': () => `
		border-radius: 5px;
	`,
	'circle': () => `
		border-radius: 50%;
	`,
}
export const getShape = shape => SHAPE[shape] || SHAPE.round;

export const TYPE = {
	'primary': () => `
		--textColor: #FFF;
		--backgroundColor: #006CFF;
		--borderColor: #006CFF;
		--paleTextColor: #006CFF;
		--paleBackgroundColor: #006CFF3b;
		--paleBorderColor: #006CFF3b;
	`,
	'secondary': () => `
		--textColor: #FFF;
		--backgroundColor: #63ad0e;
		--borderColor: #63ad0e;
		--paleTextColor: #63ad0e;
		--paleBackgroundColor: #63ad0e3b;
		--paleBorderColor: #63ad0e3b;
	`,
	'tertiary': () => `
		--textColor: #FFF;
		--backgroundColor: #ffc000;
		--borderColor: #ffc000;
		--paleTextColor: #ffc000;
		--paleBackgroundColor: #ffc0003b;
		--paleBorderColor: #ffc0003b;
	`,
}
export const getType = type => TYPE[type] || TYPE.secondary;

export const MODEL = {
	'normal': () => `
		color: var(--textColor);
		background-color: var(--backgroundColor);
		border-color: var(--borderColor);
	`,
	'shade': () => `
		color: var(--paleTextColor);
		background-color: var(--paleBackgroundColor);
		border-color: var(--paleBorderColor);
	`,
	'ghost': () => `
		color: var(--backgroundColor);
		background-color: transparent;
		border-color: var(--backgroundColor);
	`,
	'text': () => `
		color: var(--backgroundColor);
		background-color: transparent;
		border-color: transparent;
	`,
	'link': () => `
		color: var(--backgroundColor);
		background-color: transparent;
		border-color: transparent;
		text-decoration: none;
	`,
}
export const getModel = model => MODEL[model] || MODEL.normal;

