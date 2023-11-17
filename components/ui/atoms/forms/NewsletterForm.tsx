import classNames from "classnames";
import React, { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { PrimaryButton } from "../buttons";

const NewsletterForm = () => {
	const [email, setEmail] = useState<string>("");

	const emailInputRef = useRef<HTMLInputElement>(null);

	const savedNewsLetterEmail =
		process.browser &&
		localStorage.getItem(
			`"autocheck_car_rental_app_newsletter__sub_email=${email}`,
		);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (email) {
			if (savedNewsLetterEmail) {
				toast.error("You've already subscribed", {
					theme: "dark",
					autoClose: 5000,
					closeOnClick: true,
					hideProgressBar: true,
					toastId: "newsletter_sub",
				});
				return;
			}
			localStorage.setItem(
				`"autocheck_car_rental_app_newsletter__sub_email=${email}`,
				email,
			);
			toast.success("Subscription successful", {
				theme: "dark",
				autoClose: 5000,
				closeOnClick: true,
				hideProgressBar: true,
				toastId: "newsletter_sub",
			});
			setEmail("");
		}
	};
	return (
		<form
			onSubmit={handleSubmit}
			className={classNames(
				"p-1 flex items-center rounded-[5px] max-w-sm",
				email
					? emailInputRef.current &&
					  !emailInputRef.current.checkValidity()
						? "bg-red-100"
						: "bg-green-100"
					: "bg-white",
			)}>
			<input
				ref={emailInputRef}
				id="newsletter_sub_email"
				type="email"
				placeholder="Enter your email"
				className={classNames(
					"text-black outline-none focus:ring-0 px-5 rounded-[5px] bg-transparent w-full h-full mx-2 placeholder:text-sm placeholder:font-[400]",
				)}
				pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
				value={email}
				required
				onChange={(e) => setEmail(e.target.value)}
				title="Please enter a valid email address"
			/>
			<PrimaryButton
				type="submit"
				buttonText="Send"
				className="px-8 p-3"
			/>
		</form>
	);
};

export default NewsletterForm;
