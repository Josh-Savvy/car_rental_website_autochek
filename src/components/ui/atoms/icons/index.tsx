import CustomIconProps from "@/interfaces/icon.interface";

export const SearchIcon = (props: CustomIconProps) => {
	const { size, color, ...rest } = props;
	return (
		<svg
			width={size || "24"}
			height={size || "24"}
			viewBox="0 0 24 24"
			fill="none"
			{...rest}>
			<path
				d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
				stroke={color || "#0275B1"}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M20.9999 21L16.6499 16.65"
				stroke={color || "#0275B1"}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
