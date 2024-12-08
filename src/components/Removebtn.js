"use client"
import axios from "axios";
import { useRouter } from "next/navigation"
import { HiOutlineTrash } from "react-icons/hi"
const Removebtn = ({id}) => {
 const router =useRouter();
  const removeTopic=async()=>{
    const confirmed = confirm("Are You Sure !")
    if(confirmed){
      const res = await axios.delete(`/api/topics?id=${id}`)
      if (res.ok){
        router.refresh();
      }
    }
  }

 
  return (
     <>
     <button onClick={removeTopic} className="text-red-400">

     <HiOutlineTrash size={24} />
     </button>
     </>
  )
}

export default Removebtn
