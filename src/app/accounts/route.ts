import { NextRequest, NextResponse } from "next/server";

import db from "@/lib/db";

export async function GET(req: NextRequest) {
	const accounts = await db.query("SELECT * FROM accounts");

	return NextResponse.json(accounts.rows);
}
