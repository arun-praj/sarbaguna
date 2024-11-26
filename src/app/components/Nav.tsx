// import { motion } from "framer-motion";

export default function Nav() {
	const nav_item = [
		{
			key: 1,
			name: "Home",
			icon: "",
			href: "",
		},
		{
			key: 2,
			name: "News",
			icon: "",
			href: "",
		},
		{
			key: 3,
			name: "Our Vision",
			icon: "",
			href: "",
		},
		{
			key: 7,
			name: "Our Services",
			icon: "",
			href: "",
		},
		{
			key: 4,
			name: "Our Products",
			icon: "",
			href: "",
		},
		{
			key: 5,
			name: "Our Team",
			icon: "",
			href: "",
		},
		{
			key: 6,
			name: "Contact us",
			icon: "",
			href: "",
		},
	];

	// const headlines = [
	// 	"प्रधानमन्त्री ओलीले चीन भ्रमणको तयारी गर्दै बीआरआई सम्झौताको कार्यान्वयनमा जोड दिएका छन्।",
	// 	"लैङ्गिक हिंसाविरुद्धको १६ दिने अभियानमा कानुनी सुधार र तत्काल कदम उठाउन विशेषज्ञले जोड दिएका छन्।",
	// 	"हुम्लाका स्थानीयले चिसोबाट बच्न आगो बाल्न र पानीका लागि गाडी भाडामा लिन बाध्य भएका छन्।",
	// ];
	return (
		<nav className="flex lg:gap-12 md:gap-8 justify-center  bg-[rgb(0,32,40)] text-white  h-16 items-center font-semibold">
			{nav_item.map((item) => {
				return (
					// <motion.li
					// 	key={item.key}
					// 	whileHover={{ scale: 1.05 }}
					// 	whileTap={{ scale: 0.95 }}
					// >
					<button key={item.key}>
						<span>{item.icon && item.icon}</span>
						<span>{item.name}</span>
					</button>
					// </motion.li>
				);
			})}
		</nav>
	);
}
