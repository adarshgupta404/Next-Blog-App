import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method=='GET'){
        try{
          const data = await prisma.posts.findMany();
          return res.status(200).json(data)
        }
        catch(err){
            console.log(err)
        }
    }
}