import DeleteComment from "@/components/Dashboard/DeleteComment"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import { authUser } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Link from "next/link"

const Page = async() => {

    const user = await authUser()
    const comment = await prisma.comment.findMany({where : {user_provider : user?.provider, user_email : user?.email} })
    console.log(comment)

    return(
        <div className="md:p-14 sm:p-10 p-6">
            <HeaderMenu Title="Comment" />
            {comment.length > 0 ?
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 bg-color-dark-3 p-4">
                {comment.map(comment => {
                    return(
                        <Link 
                        key={comment.id} 
                        href={`/anime/${comment.mal_id}`}
                        className="bg-color-dark-4 p-3 text-color-primary relative" >
                        <h2 className="md:text-lg sm:text-md text-sm">{comment.anime_title}</h2>
                        <p className="sm:text-md text-sm italic">{comment.comment}</p>
                        <DeleteComment id={comment.id} />
                        </Link>
                    )
                })}
                </div> : <h1 className="text-center text-bold p-3 bg-color-dark-3 text-color-primary md:text-lg sm:text-md text-sm">No Comment</h1>
            }
        </div>
    )
}

export default Page