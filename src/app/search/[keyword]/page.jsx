import { getApiAnime } from '@/libs/api-libs'
import Animelist from '@/components/Animelist'
import Header from '@/components/Animelist/Header'

const Page = async ({ params }) => {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)

    const searchAnime = await getApiAnime("/anime", `q=${keyword}`)

    return (
        <>
            <section className='md:p-14 sm:p-10 p-6'>
                <Header title={`Pencarian ${decodedKeyword}`} linkHref="/" linkTitle="Kembali" />
                <Animelist api={searchAnime} />
            </section>
        </>
    )
}

export default Page