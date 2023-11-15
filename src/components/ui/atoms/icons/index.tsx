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
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.9999 21L16.6499 16.65"
				stroke={color || "#0275B1"}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
export const GooglePlayIcon = (props: CustomIconProps) => {
	const { size, color, ...rest } = props;
	return (
		<svg
			width={size || "800px"}
			height={size || "800px"}
			viewBox="0 0 32 32"
			fill="none"
			{...rest}>
			<mask
				id="mask0_87_8320"
				style={{ maskType: "alpha" }}
				maskUnits="userSpaceOnUse"
				x="7"
				y="3"
				width="24"
				height="26">
				<path
					d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z"
					fill="#C4C4C4"
				/>
			</mask>
			<g mask="url(#mask0_87_8320)">
				<path
					d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z"
					fill="url(#paint0_linear_87_8320)"
				/>
				<path
					d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z"
					fill="url(#paint1_linear_87_8320)"
				/>
				<path
					d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z"
					fill="url(#paint2_linear_87_8320)"
				/>
				<path
					d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z"
					fill="url(#paint3_linear_87_8320)"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_87_8320"
					x1="15.6769"
					y1="10.874"
					x2="7.07106"
					y2="19.5506"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#00C3FF" />
					<stop offset="1" stop-color="#1BE2FA" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_87_8320"
					x1="20.292"
					y1="15.8176"
					x2="31.7381"
					y2="15.8176"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#FFCE00" />
					<stop offset="1" stop-color="#FFEA00" />
				</linearGradient>
				<linearGradient
					id="paint2_linear_87_8320"
					x1="7.36932"
					y1="30.1004"
					x2="22.595"
					y2="17.8937"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#DE2453" />
					<stop offset="1" stop-color="#FE3944" />
				</linearGradient>
				<linearGradient
					id="paint3_linear_87_8320"
					x1="8.10725"
					y1="1.90137"
					x2="22.5971"
					y2="13.7365"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#11D574" />
					<stop offset="1" stop-color="#01F176" />
				</linearGradient>
			</defs>
		</svg>
	);
};
export const FacebookIcon = (props: CustomIconProps) => {
	const { size, color, ...rest } = props;
	return (
		<svg
			{...rest}
			fill={color || "#000000"}
			version="1.1"
			width={size || "800px"}
			height={size || "800px"}
			viewBox="0 0 512 512">
			<g id="7935ec95c421cee6d86eb22ecd11b7e3">
				<path
					style={{ display: "inline" }}
					d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379
		c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302
		c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263
		l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z"></path>
			</g>
		</svg>
	);
};
export const InstagramIcon = (props: CustomIconProps) => {
	const { size, color, ...rest } = props;
	return (
		<svg
			{...rest}
			fill={"none"}
			version="1.1"
			width={size || "800px"}
			height={size || "800px"}
			viewBox="0 0 24 24">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
				fill={color || "#0F0F0F"}
			/>
			<path
				d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
				fill={color || "#0F0F0F"}
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
				fill={color || "#0F0F0F"}
			/>
		</svg>
	);
};
export const LinkedinIcon = (props: CustomIconProps) => {
	const { size, color, ...rest } = props;
	return (
		<svg
			{...rest}
			fill={"none"}
			version="1.1"
			width={size || "800px"}
			height={size || "800px"}
			viewBox="0 0 24 24">
			<path
				d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
				fill={color || "#0F0F0F"}
			/>
			<path
				d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
				fill={color || "#0F0F0F"}
			/>
			<path
				d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
				fill={color || "#0F0F0F"}
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
				fill={color || "#0F0F0F"}
			/>
		</svg>
	);
};
