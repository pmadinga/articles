import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient

export default async(req, res) =>{
    const data = JSON.parse(req.body);
    const createdBlog = await prisma.blog.create({
        data
    })
    res.json(createdBlog);
}