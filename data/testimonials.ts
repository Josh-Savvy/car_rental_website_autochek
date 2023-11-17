type Testimonial = {
	person: { name: string; jobTitle: string; avatar?: string };
	comment: string;
	rating: number;
};
const testimonials: Testimonial[] = [
	{
		comment:
			"There are amazing peaple working here who are down -to earth and willing to work with anyone! Their priority is to take care of their own and make sure you're satisfied! It is take care of their own and make sure you're satisfied!",
		person: {
			jobTitle: "Owner Co-working Space",
			name: "Janet Parker",
		},
		rating: 5,
	},
	{
		comment:
			"There are amazing peaple working here who are down -to earth and willing to work with anyone! Their priority is to take care of their own and make sure you're satisfied! It is take care of their own and make sure you're satisfied!",
		person: {
			jobTitle: "Owner Co-working Space",
			name: "Wade Warren",
		},
		rating: 4.3,
	},
	{
		comment:
			"There are amazing peaple working here who are down -to earth and willing to work with anyone! Their priority is to take care of their own and make sure you're satisfied! It is take care of their own and make sure you're satisfied!",
		person: {
			jobTitle: "Owner Co-working Space",
			name: "John Doe",
		},
		rating: 4.8,
	},
	{
		comment:
			"There are amazing peaple working here who are down -to earth and willing to work with anyone! Their priority is to take care of their own and make sure you're satisfied! It is take care of their own and make sure you're satisfied!",
		person: {
			jobTitle: "Owner Co-working Space",
			name: "Col Rhodes",
		},
		rating: 5,
	},
];
export default testimonials;
