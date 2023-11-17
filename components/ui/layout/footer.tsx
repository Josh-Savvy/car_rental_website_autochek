import footerNavlinks from "@/data/nav/footerNavlinks";
import socialLinks from "@/data/nav/socialLinks";
import Link from "next/link";
import React from "react";
import NewsletterForm from "../atoms/forms/NewsletterForm";

const Footer = () => {
	return (
		<footer className="bg-[#181A23] p-8 min-h-[50dvh] h-full py-10 w-full min-w-screen flex xl:flex-row flex-col flex-wrap xl:items-center text-white justify-between md:px-20 xl:px-24 duration-300 gap-6">
			<div className="flex flex-col gap-5 items-start my-6 xl:my-auto">
				<Link href="/">
					<h1 className="curso-pointer select-none text-3xl font-semibold">
						Automobile
					</h1>
				</Link>
				<p className="text-[#ccc] max-w-[65%] leading-[1.1em]">
					Anywhere, anytime, we always provide best service!
				</p>
			</div>
			<div className="flex sm:flex-row flex-wrap flex-col justify-between md:items-center gap-10 md:gap-20">
				{footerNavlinks.map((link, i) => {
					return (
						<div className="grid gap-4 " key={i}>
							<h1 className="text-xl font-medium mb-4">
								{link.name}
							</h1>
							<div className="grid gap-3">
								{link.sublinks.map((sub, ind) => (
									<Link key={ind} href={sub.link}>
										<div className="" key={ind}>
											{sub.label}
										</div>
									</Link>
								))}
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex sm:items-start xl:items-start justify-between sm:items-center sm:flex-row flex-col xl:flex-col gap-5 mt-6 xl:mt-auto">
				<div className="grid gap-2">
					<h1 className="font-medium text-2xl">Connect with us</h1>
					<div className="flex items-center gap-5">
						{socialLinks.map((soc, i) => (
							<Link key={i} href={soc.link} target="_blank">
								<span className="border-2 border-white duration-300 flex justify-center items-center hover:scale-105 cursor-pointer select-none rounded-full hover:bg-[#FE5C3C] hover:border-transparent p-1.5">
									{soc.icon}
								</span>
							</Link>
						))}
					</div>
				</div>
				<div className="grid gap-1">
					<p className="">Subscribe to our newsletter</p>
					<div className="max-w-xs">
						<NewsletterForm />
					</div>
				</div>
			</div>
			<hr className="w-full border[0.5px] border-white" />
			<p className="sm:text-center flex mx-auto items-center font-[300] text-[15px]">
				Copyright 2023&copy; car rental. All Rights Reserved
			</p>
		</footer>
	);
};

export default Footer;
