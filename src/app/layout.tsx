import "./globals.css";
import { AppProviders } from "@/lib/components/Providers";

export const metadata = {
	title: "Twitch Vox (Voice Commands)",
	description: "Twitch Voice Commands",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="bg-gray-950">
			<body className={"text-white"}>
				<AppProviders>{children}</AppProviders>
			</body>
		</html>
	);
}
