import Link from "next/link";
import React from "react";
import { PrimaryButton } from "../atoms/buttons";
import { SearchIcon } from "../atoms/icons";

type NavLinkItem = { name: string; link: string };

const Navbar = () => {
	const navLinks: NavLinkItem[] = [
		{ link: "/", name: "Home" },
		{ link: "#", name: "About" },
		{ link: "#", name: "Cars" },
		{ link: "#", name: "Pricing" },
		{ link: "#", name: "Contact" },
	];
	return (
		<div className="flex items-center justify-between bg-[#1818185A] backdrop-blur-sm text-white fixed top-0 p-5 h-auto w-full lg:px-[6dvw]  z-20">
			<Link href="/">
				<h1 className="capitalize text-[#FE5C3C] text-xl cursor-pointer">
					Automobile
				</h1>
			</Link>
			<div className="hidden md:flex items-center gap-8">
				{navLinks.map((item, i) => {
					return (
						<Link key={item.name} href={item.link}>
							<div className="text-[16px] duration-300 hover:text-[#FE5C3C] tracking-tight">
								{item.name}
							</div>
						</Link>
					);
				})}
			</div>
			<div className="flex items-center gap-5">
				<span className="cursor-pointer bg-[#f5f5f5] p-2 rounded">
					<SearchIcon color={"#000"} />
				</span>
				<PrimaryButton
					className="p-2 px-9 text-white font-medium"
					buttonText="Log In"
				/>
			</div>
		</div>
	);
};

export default Navbar;
