import { HtmlHTMLAttributes, SVGProps } from "react";

export default interface CustomIconProps
	extends HtmlHTMLAttributes<SVGElement> {
	size?: string | number;
	height?: string | number;
	width?: string | number;
	color?: string;
}
