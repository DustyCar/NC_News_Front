import axios from "axios"

export default function getUsers() {
   
    return axios.get(`https://andrew-nc-news.onrender.com/api/users`)
        
    
}