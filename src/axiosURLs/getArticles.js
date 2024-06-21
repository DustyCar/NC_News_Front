import axios from "axios";

export default function getArticles(topic) {
 
  const baseURL = "https://andrew-nc-news.onrender.com/api/articles";
  
 
  return axios.get(baseURL, {params: {topic: topic }
  });
}