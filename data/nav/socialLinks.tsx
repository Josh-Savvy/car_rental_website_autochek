import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
} from "@/components/ui/atoms/icons";

type SocialLinkType = { link: string; platform: string; icon: JSX.Element };

const socialLinks: SocialLinkType[] = [
	{
		link: "#",
		platform: "Facebook",
		icon: <FacebookIcon color="#fff" size={20} />,
	},
	{
		link: "#",
		platform: "Instagram",
		icon: <InstagramIcon color="#fff" size={20} />,
	},
	{
		link: "#",
		platform: "LinkedIn",
		icon: <LinkedinIcon color="#fff" size={20} />,
	},
];
export default socialLinks;
