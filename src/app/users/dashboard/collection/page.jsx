import DeleteCollection from "@/components/Dashboard/DeleteCollection"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import { authUser } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    const user = await authUser()
    const collection = await prisma.collection.findMany({
        where: { user_provider: user?.provider, user_email: user?.email }
    })

    return (
        <div className="md:p-14 sm:p-10 p-6">
            <HeaderMenu Title="Collection" />
            {collection.length > 0 ? 
                <div className="grid gap-3 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 bg-color-dark-3 p-4">
                    {collection.map(collect => {
                        return (
                            <Link href={`/anime/${collect.mal_id}`} key={collect.id} className="group border-2 border-color-primary relative block" >
                                <div className="relative w-full h-0 pb-[40%] sm:pb-[50%] md:pb-[75%] lg:pb-[100%]">
                                    <Image
                                        src={collect.anime_image}
                                        alt={collect.anime_image}
                                        fill
                                        objectFit="cover"
                                        className="transition duration-300 ease-in-out group-hover:blur-sm"
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    />
                                </div>
                                <div className="text-center absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                    <h1 className="p-2 text-bold text-color-primary md:text-[14px] sm:text-[12px] text-[10px] text-bold">{collect.anime_title}</h1>
                                </div>
                                <DeleteCollection id={collect.id} title={collect.anime_title} />
                            </Link>
                        )
                    })}
                </div> : <h1 className="text-center text-bold p-3 bg-color-dark-3 text-color-primary md:text-lg sm:text-md text-sm">No Collection</h1>
            }
        </div>
    )
}

export default Page