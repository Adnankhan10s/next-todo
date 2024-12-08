import EditTopicForm from '@/components/EditTopicForm'
import axios from 'axios';

const getTopicById= async (id)=>
{
  try {
    const res = await axios.get(`/api/topics/${id}`)
    if(!res.ok){
      throw new Error("Failed to Fetch Topic");
    }
    return  res.json();
  } catch (error) {
    console.log(error);
  }
};


export default async function EditTopic({params}) {
  const {id}= params;
  const {topic}= await getTopicById(id);
  const {title,description}= topic;
  return (
   <EditTopicForm id={id} title={title} description={description} />
  )
}
