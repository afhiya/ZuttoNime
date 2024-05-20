"use client"
import { X } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

const DeleteComment = ({id}) => {

    const router = useRouter()

    const handleDelete = async (event) => {
        event.preventDefault()

        const data = { id }
        const response = await fetch("/api/v1/comment", {
            method: "DELETE",
            body: JSON.stringify(data)
        })
        const deleteCollection = await response.json()
        if (deleteCollection.status == 200) {
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
                title: "Comment Deleted",
                color: "#FFF"
            });
            router.refresh()
        }
        return
    }

    return (
        <button className="absolute top-1 right-1 text-color-primary" onClick={handleDelete}>
            <X size={28} className='md:text-[14px] sm:text-[12px] text-[10px]' />
        </button>
    )
}

export default DeleteComment
