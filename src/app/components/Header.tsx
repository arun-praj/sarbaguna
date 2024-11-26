import Image from "next/image";

export default function Header() {
	return (
		<header className="flex items-center gap-2 lg:gap-8">
			<div className="relative h-20 lg:h-40  w-[600px]">
				<Image alt="logo" src={"/logo.png"} fill objectFit="contain" />
			</div>
			<div
				id="bannerAds"
				className=" relative h-12 lg:h-32 w-full rounded-full"
			>
				<Image
					alt="logo"
					src={"/ad1.png"}
					fill
					objectFit="cover"
					className=" rounded-md"
				/>
			</div>
		</header>
	);
}
