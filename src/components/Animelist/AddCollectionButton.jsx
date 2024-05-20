"use client"

import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

const AddCollectionButton = ({ user_provider, mal_id, user_email, anime_image, anime_title }) => {
    
    const router = useRouter()
    
    const handdleAdd = async (event) => {
        event.preventDefault()

        const data = { user_provider, mal_id, user_email, anime_image, anime_title }

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        if (collection.status == 200) {
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
                title: "Add in successfully",
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
                onClick={handdleAdd} >
                Add to Collection
            </button>
        </div>
    )
}

export default AddCollectionButton