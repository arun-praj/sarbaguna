import Header from "./components/Header";
import Nav from "./components/Nav";
import Headlines from "./components/Headlines";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<main>
			<Container>
				<Header />
			</Container>

			<Nav />

			<Container>
				<div>
					<Headlines />
				</div>
			</Container>
			<Container>
				<div className="md:px-20">
					<Content />
				</div>
			</Container>
			<Footer />
		</main>
	);
}

const Container = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <div className="px-4 md:px-8">{children}</div>;
};
