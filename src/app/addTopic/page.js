"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
export default function AddTopic (){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.refresh();

    if (!title || !description) {
      alert("title & description are !Required");
      return;
    }
    try {
      const res = await axios.post('/api/topics') 
       
      if (res.ok) {
        router.push("/");
      }
      else {
        throw new Error("Error to create a topic");
      }
    } catch (error) {
      console.log(error);
    }

  };
 
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className='border border-slate-500 px-8 py-2' type='text' placeholder='Topic Title' />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className=' border border-slate-500 px-8 py-2' type='text' placeholder='Topic Description' />
      <button type="submit" className='bg-green-600 font-bold text-white px-6 py-3 w-fit'>Add Topic</button>
    </form>

  )
}


