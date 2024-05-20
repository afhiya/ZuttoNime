"use client"

import Animelist from "@/components/Animelist"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import PageNation from "@/components/Utilities/PageNation"
import { useEffect, useState } from "react"
import { getApiAnime } from "@/libs/api-libs"

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async () => {
        const data = await getApiAnime("/top/anime", `page=${page}`)
        setTopAnime(data)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <div className="md:p-14 sm:p-10 p-6">
            <HeaderMenu Title={`ANIME TERPOPULER #${page}`} />
            <Animelist api={topAnime} />
            <PageNation
                firstPage={page}
                lastPage={topAnime.pagination?.last_visible_page}
                setPage={setPage}
            />
        </div>
    )
}

export default Page