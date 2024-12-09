import React from 'react'
import Removebtn from './Removebtn'
import Link from 'next/link'
import {HiPencilAlt} from "react-icons/hi";
import axios from 'axios';

const getTopics = async()=>{
try {
  const res = await axios.get('/api/topics');
  if (!res.ok){
    throw new Error("Failed to fetch topics");

  }
  return res.json();
} catch (error) {
   console.log("Error Loading topics", error);
}
}

const TopicsList = async() => {
  const {topics} = await getTopics();
  return (
  <div>
 <div className="p-4 my-3 border border-slate-600  flex justify-between gap-5 items-start">
  {topics.map((index,t)=>(
    <>
    <div key={index}>

    <h2 className="font-bold text-2xl">{t.title}</h2>
    <div>{t.description}</div>
    </div>
    <div className="flex gap-2">
      <Removebtn id={t._id} />
      <Link href={`/editTopic/${t._id}`}>
      <HiPencilAlt  size={24}/>
      </Link>
    </div>
  </>
   ))}
    </div>
     </div>
  )
}

export default TopicsList
