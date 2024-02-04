'use server'

import { sql } from '@vercel/postgres'

export default async function uploadLink(html: string) {
	const { rows } = await sql`INSERT INTO ProgramsFCD (code) VALUES (${html})`;
}
