"use client"
import { X } from '@phosphor-icons/react/dist/ssr'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const DeleteCollection = ({ id, title }) => {

  const router = useRouter()
  
  const handleDelete = async (event) => {
    event.preventDefault()

    const data = { id }
    const response = await fetch("/api/v1/collection", {
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
        title: `${title} Remove in successfully`,
        color: "#FFF"
      });
      router.refresh()
    }
    return
  }

  return (
    <button className="absolute top-1 right-1 text-color-dark-1" onClick={handleDelete}>
      <X size={28} className='sm:block hidden' />
      <X size={20} className='sm:hidden block' />
    </button>
  )
}

export default DeleteCollection
