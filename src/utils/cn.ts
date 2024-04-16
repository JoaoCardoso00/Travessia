export function classNames(...classes: Array<string | Boolean>) {
	return classes.filter(Boolean).join(' ')
}

