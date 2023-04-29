import React from "react";
import styles from "./page.module.css";

import Link from "next/link";
import { getRedirect } from "@/lib/getRedirect";

export default function Home() {
	console.log("here");
	return (
		<main className={styles.main}>
			<Link href={getRedirect()} className="">
				Login with Twitch
			</Link>

			{/* <VoiceWidget /> */}
		</main>
	);
}
