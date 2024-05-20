import Image from "next/image"
import Link from "next/link"

const Animelist = ({ api }) => {
    return (
        <div className='grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3  md:p-5 p-2 bg-color-dark-3 rounded-b-lg'>
            {api.data?.map((anime) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id} className="cursor-pointer md:m-3 m-2 border-2 border-color-dark-4 text-color-primary overflow-hidden relative">
                        <div className="md:px-3 md:pt-3 pt-2 px-2 hover:text-color-secondary transition-all relative block">
                            <Image src={anime.images.webp.image_url} alt="..." width={400} height={400} className="w-full md:h-60 sm:h-40 h-20 rounded-t-sm object-cover" />
                            <div className="w-full md:h-[50px] sm:h-[45px] h-[30px] overflow-hidden pt-2">
                                <h3 className="md:text-[14px] sm:text-[12px] text-[8px] text-bold">{anime.title}</h3>
                            </div>
                        </div>
                        <span className="flex justify-start items-center md:gap-1 gap-[2px] absolute md:top-[220px] sm:top-[145px] top-[73px] md:ml-3 ml-2 pt-2 ">
                            {anime.genres ? anime.genres.map((genre, index) => <h6 key={index} className="md:text-[7px] sm:text-[5px] text-[3px] bg-color-red md:p-[3px] sm:p-[2px] p-[1px] md:rounded-md rounded-sm">
                                {genre.name}</h6>) : null}
                        </span>
                        {anime.episodes ?
                            <h5 className="p-1 md:text-[13px] sm:text-[10px] text-[7px] md:m-2 m-1">
                                {anime.episodes} Episode
                            </h5> : null
                        }
                    </Link>
                )
            })}
        </div>
    )
}

export default Animelist