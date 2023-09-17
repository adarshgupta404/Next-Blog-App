import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  try {
    const result = await sql`SELECT * FROM "posts";`;
    const posts = result.rows;
    const data = posts;
    // console.log(data);
    return response.status(200).json(data);
  } catch (error) {
    return response.status(500).json({ error });
  }
}
