import prisma from "@/libs/prisma"
import Image from "next/image"
import DeleteComment from "../Dashboard/DeleteComment"

const CommentBox = async ({ mal_id, user_provider, user_email }) => {
  const comments = await prisma.comment.findMany({ where: { mal_id: mal_id } })

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 sm:gap-3 gap-2">
      {comments.map(comment => {
        return (
          <div key={comment.id} className="bg-color-dark-4 my-2 p-2 relative text-color-primary">
            <div className="mb-1">
              <Image src={comment.user_image} width={20} height={20} className="rounded-full float-left" />
              <h2 className="indent-2 md:text-md text-sm">{comment.username}</h2>
            </div>
            <p className="md:text-sm text-xs">{comment.comment}</p>
            {comment.user_provider == user_provider && comment.user_email == user_email ? <DeleteComment id={comment.id}/> : null }
          </div>
        )
      })}
    </div>
  )
}

export default CommentBox
