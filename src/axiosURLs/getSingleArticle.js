import axios from "axios"

export default function getSingleArticle(article_id) {
   
    return axios.get(`https://andrew-nc-news.onrender.com/api/articles/${article_id}`)
}