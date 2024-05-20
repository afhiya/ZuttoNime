"use client"
import { FileX } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const notFound = () => {
    const router = useRouter()

    const handleBack = () => {
        router.back()
    }

    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-row">
                <FileX size={70} className="text-color-secondary text-bold" />
                <h1 className="text-color-secondary text-5xl">Not Found</h1>
            </div>
            <button onClick={handleBack} className="text-xl text-color-primary text-bold hover:text-color-secondary transition-all">Kembali</button>
        </div>
    )
}

export default notFound