import prisma from "@/libs/prisma"

export async function POST (request) {

    const {user_provider, mal_id, user_email, anime_image, anime_title } = await request.json()
    const data = {user_provider, mal_id, user_email, anime_image, anime_title}

    const createCollection = await prisma.collection.create({data})
    if(!createCollection) return Response.json({status : 500,isCreated : false})
    else return Response.json({status : 200, isCreated : true})
}

export async function DELETE (request) {

    const {id} = await request.json()

    
    const deleteCollection = await prisma.collection.delete({
        where: {id : id}
    })
    if(!deleteCollection) return Response.json({status : 500,isDeleted : false})
    else return Response.json({status : 200, isDeleted: true})
}