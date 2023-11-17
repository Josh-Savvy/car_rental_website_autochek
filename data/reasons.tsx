import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";

export interface IReason {
	title: string;
	content: string;
	icon: JSX.Element;
}

const reasons: IReason[] = [
	{
		title: "Expeienced Drivers",
		content:
			"Don't have a driver? Don't worry, we have many experienced drivers for you",
		icon: <PersonIcon fontSize="medium" className="text-white" />,
	},
	{
		title: "Best Prices Guaranteed",
		content: "Find a lower price? We will refund 100% the difference.",
		icon: <PersonIcon fontSize="medium" className="text-white" />,
	},
	{
		title: "24-hour Car Delivery",
		content: "Book your car and we will deliver it directly to you.",
		icon: <PersonIcon fontSize="medium" className="text-white" />,
	},
	{
		title: "24/ Technical Support",
		content: "Have a question? Contact our support anytime you need.",
		icon: <PersonIcon fontSize="medium" className="text-white" />,
	},
];
export default reasons;
