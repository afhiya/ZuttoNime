"use client"

import { ArrowFatLeft, ArrowFatRight } from "@phosphor-icons/react"

const PageNation = ({ firstPage, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handlePrev = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    const handleNext = () => {
        setPage((nextState) => nextState + 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center row-auto gap-4 md:text-lg text-md text-bold bg-color-dark-3 py-5 px-2 ">
            {firstPage <= 1 ? null :
                <button className="hover:text-color-secondary transition-all" onClick={handlePrev}>
                    <ArrowFatLeft size={25} />
                </button>
            }
            <p>{firstPage} to {lastPage}</p>
            {firstPage >= lastPage ? null :
                <button className="hover:text-color-secondary transition-all" onClick={handleNext}>
                    <ArrowFatRight size={25} />
                </button>
            }
        </div>
    )
}

export default PageNation