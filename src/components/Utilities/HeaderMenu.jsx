"use client"
import { ArrowSquareLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const HeaderMenu = ({Title}) => {
  const router = useRouter()


  const handleBack = (event) => {
    event.preventDefault()
    router.back()
  }

  return (
    <div>
      <div className="md:p-3 sm:p-3 p-2 bg-color-dark-3 border-b-2 border-b-color-primary relative">
        <button onClick={handleBack} className="absolute text-color-primary md:top-3 sm:top-1.5 top-0.5" ><ArrowSquareLeft size={32} /></button>
        <h3 className="text-bold text-center md:text-lg sm:text-md text-sm text-color-primary">{Title}</h3>
      </div>
    </div>
  )
}

export default HeaderMenu
