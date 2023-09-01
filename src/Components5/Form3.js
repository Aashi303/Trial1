import axios from "axios";
import React,{useState,useEffect} from "react";

const baseURL = "https://dog.ceo/api/breeds/image/random";

const Form3 = () => {
    const [post, setPost] = useState(null);
  useEffect(() => {
    axios
    .get(baseURL)
    .then((response) => {
        console.log(response.data)
        setPost(response.data);
    })
    .catch((error)=>{
      console.error(error);
    });
  });

if (!post) return null;

  return (
    <div>
      <img src={post.message} width="500px" height="500px"/>
    </div>
  )
}

export default Form3
