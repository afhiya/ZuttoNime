import Animelist from '@/components/Animelist'
import Header from '@/components/Animelist/Header'
import InputComponent from '@/components/Navbar/InputComponent'
import { getApiAnime, getNestedAnime, reproduce } from '@/libs/api-libs'

const Page = async () => {

  const topAnime = await getApiAnime("/top/anime", "limit=8")
  let recommendedAnime = await getNestedAnime("/recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 10)

  return (
    <>
      <div className='md:pt-14 sm:pt-10 pt-6 md:px-10 sm:px-8 px-5 sm:hidden'>
        <InputComponent />
      </div>
      <section className='md:pt-14 sm:pt-10 pt-6 md:px-10 sm:px-8 px-5 pb-5'>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua" />
        <Animelist api={topAnime} />
      </section>
      <section className='md:pt-14 sm:pt-10 pt-6 md:px-10 sm:px-8 px-5 pb-5'>
        <Header title="Rekomendasi" />
        <Animelist api={recommendedAnime} />
      </section>
    </>
  )
}

export default Page