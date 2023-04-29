import { Pool, type QueryResultRow } from "pg";

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

const db = {
	query: async <T extends QueryResultRow>(queryText: string, values?: any) =>
		await pool.query<T>(queryText, values),
};

export default db;
