import { HtmlHTMLAttributes } from "react";
export default interface IPrimaryButtonProps
	extends HtmlHTMLAttributes<HTMLButtonElement> {
	link?: string;
	buttonText?: string;
}
