export const calculatePercentage = (
	value: number,
	maxValue: number,
): number => {
	return (value / maxValue) * 100;
};

export function getArrayObjectKeyValues<T extends Record<string, any>>(
	arrayOfObjects: T[],
	key: string,
): string[] {
	const values = new Set(arrayOfObjects.map((obj) => obj[key])); //used the Set() constructor to handle dup values
	return Array.from(values);
}
