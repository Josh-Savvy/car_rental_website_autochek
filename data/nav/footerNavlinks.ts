type FooterNavLinkItem = { label: string; link: string };
type FooterNavLink = { name: string; sublinks: FooterNavLinkItem[] };

const footerNavlinks: FooterNavLink[] = [
	{
		name: "Services",
		sublinks: [
			{ label: "Home", link: "#" },
			{ label: "Download", link: "#" },
			{ label: "Pricing", link: "#" },
		],
	},
	{
		name: "Resources",
		sublinks: [
			{ label: "Home", link: "#" },
			{ label: "Download", link: "#" },
			{ label: "Pricing", link: "#" },
		],
	},
	{
		name: "Support",
		sublinks: [
			{ label: "FAQ", link: "#" },
			{ label: "How It Works", link: "#" },
			{ label: "Features", link: "#" },
		],
	},
];

export default footerNavlinks;
