import { HtmlHTMLAttributes } from "react";
export default interface IPrimaryButtonProps
	extends HtmlHTMLAttributes<HTMLButtonElement> {
	buttonText: string;
	icon?: JSX.Element | null;
	disabled?: boolean;
	type?: "submit" | "reset" | "button";
	link?: string;
}
