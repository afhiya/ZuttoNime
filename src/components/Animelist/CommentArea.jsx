"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Swal from "sweetalert2"

const CommentArea = ({ user_provider, mal_id, user_email, username, user_image, anime_title }) => {
    const [comment,setComment] = useState("")
    const router = useRouter()

    const handleInput = (event) => {
        setComment(event.target.value)
    }

    const handlePost = async(event) => {
        event.preventDefault()
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

        if(!comment) return Toast.fire({
            icon: "error",
            iconColor: "#A12E24",
            title: `Komentar Tidak Boleh Kosong`,
            color: "#FFF"
          });
        if(comment.length < 3) return Toast.fire({
            icon: "error",
            iconColor: "#A12E24",
            title: `Komentar Harus lebih dari 3 huruf`,
            color: "#FFF"
          });

        const data = {user_provider, mal_id, user_email, username, user_image, comment, anime_title}
        const response = await fetch("/api/v1/comment",{
            method: "POST",
            body: JSON.stringify(data)
        })
        const responComment = await response.json()
        if(responComment.status == 200){
            Toast.fire({
                icon: "success",
                iconColor: "#366AD3",
                title: `Comments Added`,
                color: "#FFF"
              });
            setComment("")
            router.refresh()
        }
    }

    return(
        <div className="flex flex-col gap-2 py-4 px-2">
            <textarea 
            className="w-full h-32 p-2 text-lg rounded-md" 
            onChange={handleInput}
            value={comment} />
            <button 
            className="sm:w-40 w-full bg-color-secondary sm:text-sm text-xs text-color-dark-1 p-2 rounded-sm mt-1"
            onClick={handlePost}>
            Posting Comment
            </button>
        </div>
    )
}

export default CommentArea