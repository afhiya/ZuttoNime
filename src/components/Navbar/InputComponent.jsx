"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputComponent = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        console.log(keyword)
        if (!keyword || keyword.trim() == "") return

        if (event.key === 'Enter' || event.type === 'click') {
            event.preventDefault()
            router.push(`/search/${keyword}`)
            searchRef.current.value = ''
        }
    }

    return (
        <div className="relative sm:mr-10">
            <input placeholder="Cari Anime..." className="rounded-md md:w-80 sm:w-40 w-full md:h-15 h-8 p-1 sm:bg-color-dark-2 bg-color-dark-4 md:text-md sm:text-sm text-xs text-color-primary" ref={searchRef} onKeyUp={handleSearch} />
            <button className="absolute top-1 end-1" onClick={handleSearch} >
                <MagnifyingGlass className="text-color-primary" size={20} />
            </button>
        </div>
    )
}

export default InputComponent