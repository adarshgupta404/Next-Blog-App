import { sql } from "@vercel/postgres";

export default async function getblogs({ query }, res) {
  if (typeof query.query === "string") {
    try {
      const search = query.query; // Renamed 'seach' to 'search' for consistency
      const result = await sql`
        SELECT * FROM posts WHERE 
        Title ~* ${search}
        OR Name ~* ${search}
        OR Tags ~* ${search}
        OR Content ~* ${search};
      `;
      const posts = result.rows;
      const data = posts;
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error });
    }
  } else if (query.query === undefined) { // Corrected the condition here
    try {
      const result = await sql`
        SELECT * FROM posts;
      `;
      const posts = result.rows;
      const data = posts;
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}
