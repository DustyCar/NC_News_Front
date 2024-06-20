// child of comment card
import axios from "axios"
import { useState } from "react";


export default function PostComment({article_id, commentList, setCommentList}) {
    const [myusername, setmyUsername] = useState('')
    const [mycomment, setmyComment] = useState('')
    


    function handleSubmit(event) {
        event.preventDefault();
         axios.post(`https://andrew-nc-news.onrender.com/api/articles/${article_id}/comments`, {username: myusername, body: mycomment}).then((response) => {
          setCommentList([response.data.newComment, ...commentList]); 

          setmyUsername("")
          setmyComment("")
         })
      }

     
        
           return(
            <form onSubmit={handleSubmit}>
            <label htmlFor="myusername">Username: </label>
            <input
              id="myusername"
              type="text"
              value={myusername} 
              onChange={(e) => setmyUsername(e.target.value)} 
            />
    
            <label htmlFor="mycomment">Add Comment: </label>
            <textarea
              id="mycomment"
              value={mycomment} 
              onChange={(e) => setmyComment(e.target.value)} 
              style={{ width: '400px', height: '200px' }}
            ></textarea>
    
            <button type="submit">Submit</button>
          </form>
    
           )
        
      
}

