import Image from "next/image";
export default function Headlines() {
	const headlines = [
		"प्रधानमन्त्री ओलीले चीन भ्रमणको तयारी गर्दै बीआरआई सम्झौताको कार्यान्वयनमा जोड दिएका छन्।",
		"लैङ्गिक हिंसाविरुद्धको १६ दिने अभियानमा कानुनी सुधार र तत्काल कदम उठाउन विशेषज्ञले जोड दिएका छन्।",
		"हुम्लाका स्थानीयले चिसोबाट बच्न आगो बाल्न र पानीका लागि गाडी भाडामा लिन बाध्य भएका छन्।",
	];

	return (
		<section className=" font-bold lg:text-2xl sm:text-xl  text-center py-8 ">
			<div className="relative h-[50px] w-full">
				<Image src="/chart1.png" alt="chart" fill objectFit="cover" />
			</div>
			{headlines &&
				headlines.map((news, index) => {
					return (
						<div className="py-2 md:py-4" key={index}>
							<span className="">{news}</span>
							<div className=" mt-4 border-t-2 border-gray-300 w-[600px] mx-auto"></div>
						</div>
					);
				})}
		</section>
	);
}
