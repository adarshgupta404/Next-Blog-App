import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const result =
      await sql`UPDATE "posts"
      SET "image" = 'https://images.unsplash.com/photo-1501183638710-841dd1904471';
      `;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}