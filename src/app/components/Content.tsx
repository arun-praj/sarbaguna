"use client";
// import { motion } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
// import { Tabs, rem, Table } from "@mantine/core";
// import {
// 	IconPhoto,
// 	IconMessageCircle,
// 	IconSettings,
// } from "@tabler/icons-react";
export default function Content() {
	// const iconStyle = { width: rem(12), height: rem(12) };

	const exclusive_news = [
		"नेप्सेमा आज भारी गिरावट, लगानीकर्तामा चिन्ता",
		"वित्तीय बजारमा लगानीका नयाँ अवसरहरूको खोजी",
		"नेपाल राष्ट्र बैंकद्वारा जारी गरिएका नयाँ लगानी नियमावली",
		"सेयर बजारमा नयाँ लगानीकर्ताको चासो बढ्दो",
		"पुँजी बजारको दीर्घकालीन प्रक्षेपण र योजनाहरू",
		"म्युचुअल फण्डमा लगानी कसरी गर्ने? विशेषज्ञको सल्लाह",
	];
	const announcements = [
		{
			date: "2024-11-25",
			headline: "सेयर बजारमा २% ले वृद्धि, कारोबार रकममा सुधार।",
		},
		{
			date: "2024-11-24",
			headline: "नयाँ कम्पनीको आईपीओ खुल्ने मिति घोषणा।",
		},
		{
			date: "2024-11-23",
			headline: "धितोपत्र बोर्डले नयाँ लगानी नियमहरू जारी।",
		},
		{
			date: "2024-11-22",
			headline: "सिआइएनडेक्समा भारी गिरावट, लगानीकर्ता सतर्क।",
		},
		{
			date: "2024-11-21",
			headline: "सेयर बजारमा उच्च कारोबार, बाणिज्य बैंकको सेयरमा आकर्षण।",
		},
		{
			date: "2024-11-20",
			headline: "लघुवित्त कम्पनीहरूको सेयर मूल्यमा सुधार।",
		},
	];
	const data = [
		{
			symbol: "Banking SubIndex",
			current: "1,481.49",
			chng: "-8.14",
			chngPercent: "-0.54",
		},
		{
			symbol: "Development Bank Index",
			current: "5,526.19",
			chng: "-92.00",
			chngPercent: "-1.63",
		},
		{
			symbol: "Finance Index",
			current: "3,556.15",
			chng: "-13.28",
			chngPercent: "-0.37",
		},
		{
			symbol: "Hotels And Tourism Index",
			current: "6,726.29",
			chng: "-33.20",
			chngPercent: "-0.49",
		},
		{
			symbol: "HydroPower Index",
			current: "3,491.97",
			chng: "-14.53",
			chngPercent: "-0.41",
		},
		{
			symbol: "Investment Index",
			current: "104.64",
			chng: "0.09",
			chngPercent: "0.08",
		},
	];

	const ipo_table = [
		{
			sn: "1",
			symbol: "GMLIL",
			company: "Guardian",
			units: "122222",
			price: "123123",
			opening: "Coming soon",
			closing: "Coming soon",
			status: "Coming soon",
		},
		{
			sn: "1",
			symbol: "GMLIL",
			company: "Guardian",
			units: "122222",
			price: "123123",
			opening: "Coming soon",
			closing: "Coming soon",
			status: "Coming soon",
		},
		{
			sn: "1",
			symbol: "GMLIL",
			company: "Guardian",
			units: "122222",
			price: "123123",
			opening: "Coming soon",
			closing: "Coming soon",
			status: "Coming soon",
		},
		{
			sn: "1",
			symbol: "GMLIL",
			company: "Guardian",
			units: "122222",
			price: "123123",
			opening: "Coming soon",
			closing: "Coming soon",
			status: "Coming soon",
		},
		{
			sn: "1",
			symbol: "GMLIL",
			company: "Guardian",
			units: "122222",
			price: "123123",
			opening: "Coming soon",
			closing: "Coming soon",
			status: "Coming soon",
		},
		{
			sn: "1",
			symbol: "GMLIL",
			company: "Guardian",
			units: "122222",
			price: "123123",
			opening: "Coming soon",
			closing: "Coming soon",
			status: "Coming soon",
		},
		{
			sn: "1",
			symbol: "GMLIL",
			company: "Guardian jhansdf askdkjfhasdoj ojahsdf",
			units: "122222",
			price: "123123",
			opening: "Coming soon",
			closing: "Coming soon",
			status: "Coming soon",
		},
	];
	// const ipo_table_rows = ipo_table.map((element, index) => (
	// 	<Table.Tr key={index}>
	// 		<Table.Td>{element.symbol}</Table.Td>
	// 		<Table.Td>{element.company}</Table.Td>
	// 		<Table.Td>{element.units}</Table.Td>
	// 		<Table.Td>{element.price}</Table.Td>
	// 		<Table.Td>{element.opening}</Table.Td>
	// 		<Table.Td>{element.closing}</Table.Td>
	// 		<Table.Td>{element.status}</Table.Td>
	// 	</Table.Tr>
	// ));
	return (
		<>
			{/* banner */}
			<div className="grid gap-8 grid-cols-1 md:grid-cols-12">
				<div className="row-span-1 md:col-span-5 xl:col-span-6 w-full">
					<div className="mx-auto w-full min-h-[400px] rounded-sm relative">
						<Image
							src={"/kp.png"}
							fill
							objectFit="cover"
							alt="hero"
							className="rounded-md brightness-75"
						/>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="absolute px-8 w-full bottom-10 text-white font-bold text-2xl lg:text-4xl "
						>
							<span className="text-[#FFD700]">
								Successful investing
							</span>
							&nbsp; is about managing risk, not avoiding it.
						</motion.div>
					</div>
				</div>

				<div
					className="row-span-1 relative md:col-span-4 xl:col-span-3 w-full max-h-[400px] overflow-scroll     [&::-webkit-scrollbar]:w-1
        [&::-webkit-scrollbar-track]:bg-white
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-white
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500  "
				>
					<h1 className="border-b-2 border-b-[#FFD700]">
						<button className="bg-[#000000] text-[#FFD700] px-4 py-2 text-center rounded-t-md">
							Exclusive News
						</button>
					</h1>
					<div
						className=" py-4 
    "
					>
						<ul>
							{exclusive_news.map((header, index) => (
								<li
									key={index}
									className={`flex items-start gap-2 py-3 px-4 ${
										index !== exclusive_news.length - 1
											? "border-b"
											: ""
									}`}
								>
									<span className="text-blue-500 font-bold">
										&#8226;
									</span>
									<span>{header}</span>
								</li>
							))}
						</ul>
					</div>
					<button className="sticky bottom-[-50px] float-end right-[0px] bg-[#000000] text-[#FFD700] rounded-md px-4 py-2">
						See more ...
					</button>
				</div>

				<div className=" flex gap-2 flex-col row-span-1 md:col-span-3 xl:col-span-2 w-full mt-16 md:mt-0">
					<div className="relative w-full h-full">
						<Image
							alt="ad2"
							src={"/ad2.png"}
							fill
							objectFit="cover"
							className=" rounded-md"
						/>
					</div>
					<div className="relative w-full h-full">
						<Image
							alt="ad2"
							src={"/ad2.png"}
							fill
							objectFit="cover"
							className=" rounded-md"
						/>
					</div>
				</div>
			</div>

			{/* Ad */}
			<div id="ad-3" className="">
				<div className="mx-auto w-full h-[180px] rounded-sm relative">
					<Image
						src={"/ad3.png"}
						fill
						objectFit="contain"
						alt="hero"
						className="rounded-md "
					/>
				</div>
			</div>

			{/* Announcement */}
			<div className="grid md:grid-cols-12 gap-8">
				<div className=" col-span-5">
					<h1 className="border-b-2 border-b-[#FFD700]">
						<button className="bg-[#000000] text-[#FFD700] px-4 py-2 text-center text-2xl rounded-t-md">
							Announcement
						</button>
					</h1>
					<div
						className="overflow-y-scroll py-4 relative
        [&::-webkit-scrollbar]:w-1
        [&::-webkit-scrollbar-track]:bg-white
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-white
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
					>
						<ul>
							{announcements.map((announcement, index) => (
								<li
									key={index}
									className={`flex items-start gap-2 py-3 px-4 ${
										index !== exclusive_news.length - 1
											? "border-b"
											: ""
									}`}
								>
									<span className="text-blue-500 font-bold">
										&#8226;
									</span>
									<div className="flex flex-col">
										<span className=" text-xl">
											{announcement.headline}
										</span>
										<span className=" text-xs">
											{announcement.date}
										</span>
									</div>
								</li>
							))}
						</ul>
						<button className="sticky bottom-[-50px] right-[0px] bg-[#000000] text-[#FFD700] rounded-md px-4 py-2">
							See more ...
						</button>
					</div>
				</div>
				<div className=" col-span-4 ">
					<div className="  relative mt-10 w-full h-auto overflow-y-hidden">
						<div className="p-6 max-w-md mx-auto bg-white border rounded shadow">
							<table className="w-full text-left text-sm">
								<thead>
									<tr className="border-b">
										<th className="py-2 px-2 font-semibold">
											Symbol
										</th>
										<th className="py-2 px-2 font-semibold">
											Current
										</th>
										<th className="py-2 px-2 font-semibold">
											Chng
										</th>
										<th className="py-2 px-2 font-semibold">
											Chng %
										</th>
									</tr>
								</thead>
								<tbody>
									{data.map((row, index) => (
										<tr
											key={index}
											className={`border-b ${
												parseFloat(row.chngPercent) > 0
													? "text-green-500"
													: "text-red-500"
											}`}
										>
											<td className="py-2 px-2 text-gray-700">
												{row.symbol}
											</td>
											<td className="py-2 px-2 text-gray-700">
												{row.current}
											</td>
											<td className="py-2 px-2">
												{row.chng}
											</td>
											<td className="py-2 px-2">
												{row.chngPercent}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className=" col-span-3  flex flex-col gap-2">
					<div className="relative w-full h-[300px]">
						<Image
							alt="ad4"
							src={"/ad4.png"}
							fill
							objectFit="contain"
							className=" rounded-md"
						/>
					</div>
					<div className="relative w-full h-[300px]">
						<Image
							alt="ad2"
							src={"/ad2.png"}
							fill
							objectFit="cover"
							className=" rounded-md"
						/>
					</div>
				</div>
				<div className="grid grid-cols-12 w-[55vw]">
					<div className=" relative w-[800px] mt-[-30px] h-[500px] col-span-12">
						<Image
							alt="ad2"
							src={"/table.png"}
							fill
							objectFit="contain"
							className=" rounded-md"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
