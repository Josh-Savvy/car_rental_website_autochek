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
 * @param arrayOfObjects - Array of objects containing key-value pairs
 * @param key - The key for the values to be extracted
 * @returns An array of unique values of the specified key
 */

export function getArrayObjectKeyValues<T extends Record<string, any>>(
	arrayOfObjects: T[],
	key: string,
): string[] {
	const values = new Set(arrayOfObjects.map((obj) => obj[key])); // used the Set() constructor to create a new array unique values of the specified key
	return Array.from(values);
}

/**
 * Query string for filtering and searching
 * @param filter - The filter to include in the query string
 * @param searchQuery - The search query (mostly from an input element) to include in the query string
 * @returns The constructed query string
 */
export function buildQueryString<T extends Record<string, string>>(
	filter: { key: keyof T; value: string } | undefined,
	searchQuery: string,
): string {
	if (filter) {
		if (typeof searchQuery === "undefined" || !searchQuery)
			return `${filter.value.toString().trim()}`.toLowerCase().trim();
		return `${encodeURIComponent(searchQuery)}&${encodeURIComponent(
			filter.key.toString().trim(),
		)}=${filter.value.toString().trim()}`
			.toLowerCase()
			.trim();
	} else if (searchQuery)
		// if only searchqeury was povided, encode only searchQuery
		return `${encodeURIComponent(searchQuery)}`.toLowerCase().trim();
	// else
	return "";
}
