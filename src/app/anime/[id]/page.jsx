import { getApiAnime } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import { authUser } from "@/libs/auth-libs"
import AddCollectionButton from "@/components/Animelist/AddCollectionButton"
import prisma from "@/libs/prisma"
import RemoveCollectionButton from "@/components/Animelist/RemoveCollectionButton"
import CommentArea from "@/components/Animelist/CommentArea"
import CommentBox from "@/components/Animelist/CommentBox"

const Page = async ({ params: { id } }) => {

    const animeresponse = await getApiAnime(`/anime/${id}`)
    const anime = animeresponse.data
    const user = await authUser()
    const collection = await prisma.collection.findFirst({
        where: { user_provider: user?.provider, mal_id: id, user_email: user?.email }
    })

    return (
        <div className="relative">
            <div className="w-70 h-40 gradient" />
            <div className="bg-color-dark-3 absolute m-8 top-10 md:p-90 sm:p-8 p-6">
                <div className="flex md:flex-row flex-col items-center justify-center gap-2 relative">
                    <div className="flex flex-col justify-center items-center w-[60%]">
                        <h1 className="md:text-xl sm:text-lg text-md pb-5 text-color-primary text-bold">{anime.title} - {anime.year}</h1>
                        <Image src={anime.images.webp.large_image_url} width={350} height={350} className="w-60 mb-5" />
                        {!user ? null : !collection ?
                            <AddCollectionButton user_provider={user?.provider} mal_id={id} user_email={user?.email} anime_image={anime.images.webp.large_image_url} anime_title={anime.title} />
                            :
                            <RemoveCollectionButton id={collection.id} />
                        }
                        <h2 className="text-color-primary md:text-md sm:text-sm text-xs">Followed by {anime.members} people</h2>
                    </div>
                    <div className="w-full p-0 m-0">
                        <p className="text-color-primary md:text-md sm:text-sm text-xs md:pt-5 pt-4">{anime.synopsis}</p>
                        <div className="grid md:grid-cols-4 sm:grid-cols-4 grid-cols-3 gap-2 text-color-primary py-4 md:text-sm sm:text-xs text-[10px] ">
                            <div className="text-center flex justify-center items-center flex-col sm:h-20 md:w-40 sm:w-20 w-20 p-2  border-color-dark-4 border-2 rounded">
                                <h1>Rank</h1>
                                <h3>{anime.rank}</h3>
                            </div>
                            <div className="text-center flex justify-center items-center flex-col sm:h-20 md:w-40 sm:w-20 w-20 p-2 border-color-dark-4 border-2 rounded">
                                <h1>Score</h1>
                                <h3>{anime.score}</h3>
                            </div>
                            <div className="text-center flex justify-center items-center flex-col sm:h-20 md:w-40 sm:w-20 w-20 p-2 border-color-dark-4 border-2 rounded">
                                <h1>Type</h1>
                                <h3>{anime.type}</h3>
                            </div>
                            <div className="text-center flex justify-center items-center flex-col sm:h-20 md:w-40 sm:w-20 w-20 p-2 border-color-dark-4 border-2 rounded">
                                <h1>Source</h1>
                                <h3>{anime.source}</h3>
                            </div>
                            <div className="text-center flex justify-center items-center flex-col sm:h-20 md:w-40 sm:w-20 w-20 p-2 border-color-dark-4 border-2 rounded">
                                <h1>Episodes</h1>
                                <h3>{anime.episodes}</h3>
                            </div>
                            <div className="text-center flex justify-center items-center flex-col sm:h-20 md:w-40 sm:w-20 w-20 p-2 border-color-dark-4 border-2 rounded">
                                <h1>Studio</h1>
                                <h3>{anime.studios[0].name}</h3>
                            </div>
                            <div className="text-center flex justify-center items-center flex-col sm:h-20 md:w-40 sm:w-20 w-20  p-2 border-color-dark-4 border-2 rounded">
                                <h1>Status</h1>
                                <h3>{anime.status}</h3>
                            </div>
                            <div className="text-center flex justify-center items-center flex-col sm:h-20 md:w-40 sm:w-20 w-20 p-2 border-color-dark-4 border-2 rounded">
                                <h1>Duration</h1>
                                <h3>{anime.duration}</h3>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row gap-2 items-center text-color-primary">
                                {anime.genres.map((genre, index) => (
                                    <h5 key={index} className="bg-color-dark-4 p-2 md:text-sm sm:text-xs text-[10px] rounded-xl">{genre.name}</h5>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-20">
                    <div>
                        <h1 className="text-bold md:text-xl sm:text-lg text-md text-color-primary">Trailer</h1>
                        <VideoPlayer youtubeId={anime.trailer.youtube_id} />
                    </div>
                    <div className="my-2">
                        <h1 className="text-bold md:text-xl sm:text-lg text-md text-color-primary">Komentar</h1>
                        <div className="bg-color-dark-2 my-3 p-3">
                            <CommentBox mal_id={id} user_provider={user?.provider} user_email={user?.email}/>
                            {user &&
                                <CommentArea user_provider={user?.provider} mal_id={id} user_email={user?.email} username={user?.name} user_image={user?.image} anime_title={anime.title} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
