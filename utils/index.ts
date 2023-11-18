export const calculatePercentage = (
	value: number,
	maxValue: number,
): number => {
	return (value / maxValue) * 100;
};

export function groupArrayByTag<T extends Record<string, any>>(
	inventory: Array<T>,
	tag: string,
): Record<typeof tag, T[]> {
	return inventory.reduce((result, item) => {
		const keyValue = item[tag] as string;
		result[keyValue] = result[keyValue] || [];
		result[keyValue].push(item);
		return result;
	}, {} as Record<typeof tag, T[]>);
}
