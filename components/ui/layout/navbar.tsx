import Link from "next/link";
import React from "react";
import { PrimaryButton } from "../atoms/buttons";
import { SearchIcon } from "../atoms/icons";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type NavLinkItem = { label: string; link: string };

const Navbar = () => {
	const router = useRouter();
	const navLinks: NavLinkItem[] = [
		{ link: "/", label: "Home" },
		{ link: "/#about", label: "About" },
		{ link: "/#cars", label: "Cars" },
		{ link: "/#pricing", label: "Pricing" },
		{ link: "/#contact", label: "Contact" },
	];
	return (
		<div className="flex items-center justify-between bg-[#1818189A] backdrop-blur-md text-white fixed top-0 p-5 h-auto w-full lg:px-[6dvw] z-40">
			<Link href="/">
				<h1 className="capitalize text-[#FE5C3C] text-2xl cursor-pointer">
					Automobile
				</h1>
			</Link>
			<div className="hidden md:flex items-center gap-8">
				{navLinks.map((item, i) => {
					return (
						<Link key={item.label} href={item.link}>
							<div className="relative group cursor-pointer">
								<div className="text-[16px] duration-300 hover:text-[#FE5C3C] tracking-tight">
									{item.label}
								</div>
								{router.pathname === item.link && (
									<motion.span
										layoutId="underline"
										transition={{ duration: 0.8 }}
										className="absolute -bottom-1 bg-white h-[2px] w-full left-0 duration-300"
									/>
								)}
							</div>
						</Link>
					);
				})}
			</div>
			<div className="flex items-center gap-5">
				<span className="cursor-pointer bg-[#f5f5f5] p-2 rounded duration-300 hover:scale-[1.05]">
					<SearchIcon color={"#000"} />
				</span>
				<PrimaryButton
					className="p-2 px-9 text-white font-medium duration-300 hover:scale-[1.05]"
					buttonText="Log In"
				/>
			</div>
		</div>
	);
};

export default Navbar;
