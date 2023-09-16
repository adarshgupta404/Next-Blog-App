import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      // Set CORS headers manually
      res.setHeader('Access-Control-Allow-Origin', 'https://next-blog-app-eight-mu.vercel.app');
      res.setHeader('Access-Control-Allow-Methods', 'GET');

      const data = await prisma.posts.findMany();
      return res.status(200).json(data);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
