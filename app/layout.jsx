import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Zekri | Portofolio",
	description:
		"My name is Zekriansyah Ramadhan, I'm a Technical Support/Junio System Administrator. I Graduated From Amikom University Yogyakata.",
	author: "Zekriansyah Ramadhan",
	siteUrl: "https://zekri.id",
	applicationName: "ZekriID",
	keywords: [
		"Zekri",
		"Zekriansyah",
		"Zekriansyah Ramadhan",
		"zekrisme",
	],
	openGraph: {
		type: "website",
		url: "https://zekri.id",
		title: "Zekri | Portofolio",
		site_name: "Zekri | Portofolio",
		description: "My name is Zekri, This is my Portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Zekri Portofolio",
			},
		],
		site_name: "Zekri | Portofolio",
	},
};


import Chat from "@/components/Chat";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
