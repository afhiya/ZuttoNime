import prisma from "@/libs/prisma"

export async function POST(request) {
    const { user_provider, mal_id, user_email, username, user_image, comment, anime_title } = await request.json()
    const data = { user_provider, mal_id, user_email, username, user_image, comment, anime_title }

    const createComment = await prisma.comment.create({ data })
    if (!createComment) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
}

export async function DELETE(request) {

    const { id } = await request.json()

    const deleteComment = await prisma.comment.delete({
        where: { id: id }
    })
    if (!deleteComment) return Response.json({ status: 500, isDeleted: false })
    else return Response.json({ status: 200, isDeleted: true })
}