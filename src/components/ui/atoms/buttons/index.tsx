import IPrimaryButtonProps from "@/interfaces/button.interface";
import Link from "next/link";
import classNames from "classnames";

export const PrimaryButton = (props: IPrimaryButtonProps) => {
	const { link, buttonText, className, ...rest } = props;
	return !link ? (
		<button {...rest} className={classNames("", className)}>
			{buttonText}
		</button>
	) : (
		<Link href={link}>
			<button {...rest} className={classNames("", className)}>
				{buttonText}
			</button>
		</Link>
	);
};
