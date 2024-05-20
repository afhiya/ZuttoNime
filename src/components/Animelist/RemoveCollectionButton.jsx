"use client"

import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

const RemoveCollectionButton = ({ id }) => {

    const router = useRouter()

    const handdleRemove = async (event) => {
        event.preventDefault()

        const data = { id }
        const response = await fetch("/api/v1/collection", {
            method: "DELETE",
            body: JSON.stringify(data)
        })
        const removeCollection = await response.json()
        if (removeCollection.status == 200) {
            const Toast = Swal.mixin({
                toast: true,
                background: "#000",
                position: "bottom",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                iconColor: "#366AD3",
                title: "Remove in successfully",
                color: "#FFF"
            });
            router.refresh()
        }
        return
    }

    return (
        <div>
            <button
                className="md:w-60 w-40 bg-color-secondary mb-5 md:p-2 p-1 flex justify-center items-center flex-row text-color-dark-4 md:text-md sm:text-sm text-xs text-bold hover:bg-color-dark-1 hover:text-color-primary transition-all rounded-xl"
                onClick={handdleRemove} >
                Remove From Collection
            </button>
        </div>
    )
}

export default RemoveCollectionButton
