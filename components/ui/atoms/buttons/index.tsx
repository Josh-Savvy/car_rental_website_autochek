import IPrimaryButtonProps from "@/interfaces/button.interface";
import Link from "next/link";
import classNames from "classnames";

export const PrimaryButton = (props: IPrimaryButtonProps) => {
	const {
		link,
		buttonText,
		className,
		disabled,
		icon,
		type,
		iconClass,
		// onClick,
		...rest
	} = props;
	return !link ? (
		<button
			type={type}
			disabled={disabled}
			{...rest}
			// onClick={() => setTimeout(function () {}, 1500)} // !To do: Implement debounce/throttler here
			className={classNames(
				"bg-[#FE5C3C] flex text-center rounded-[5px] select-none cursor-pointer",
				className,
				disabled ? "cursor-not-allowed" : "",
			)}>
			{buttonText}{" "}
			<span className={classNames("", iconClass)}>{icon}</span>
		</button>
	) : (
		<Link href={link}>
			<button
				{...rest}
				className={classNames(
					"bg-[#FE5C3C] flex text-center rounded-[5px] select-none cursor-pointer",
					className,
					disabled ? "cursor-not-allowed" : "",
				)}>
				{buttonText}{" "}
				<span className={classNames("", iconClass)}>{icon}</span>
			</button>
		</Link>
	);
};
