/**
 * Calculate the percentage of a value relative to a maximum value
 * @param value - The value to calculate the percentage of
 * @param maxValue - The maximum value against which to calculate the percentage
 * @returns The calculated percentage as a number
 */

export const calculatePercentage = (
	value: number,
	maxValue: number,
): number => {
	// Calculate the percentage using the formula: (value / maxValue) * 100
	return (value / maxValue) * 100;
};

/**
Get an array of unique values of a specified key from an array of objects
* @param key - The key for the values to be extracted
 * @param arrayOfObjects - Array of objects containing key-value pairs
 * @returns An object consisting of the specified key as the key, and the new array of unique values of the specified key
 */

export function getUniqueValuesByKey<T extends Record<string, any>>(
	arrayOfObjects: T[],
	key: string,
): { key: string; values: string[] } {
	const values = new Set(arrayOfObjects.map((obj) => obj[key])); // used the Set() constructor to create a new array unique values of the specified key
	return { key: key, values: Array.from(values) };
}
