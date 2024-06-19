import axios from "axios"

export default function getArticles() {
    return  axios.get("https://andrew-nc-news.onrender.com/api/articles")
}