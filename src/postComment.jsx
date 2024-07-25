// child of comment card
import axios from "axios"
import { useState } from "react";


export default function PostComment({article_id, commentList, setCommentList, loggedInUser}) {
   
    const [mycomment, setmyComment] = useState('')
    


    function handleSubmit(event) {
        event.preventDefault();
         axios.post(`https://andrew-nc-news.onrender.com/api/articles/${article_id}/comments`, {username: loggedInUser, body: mycomment}).then((response) => {
          setCommentList([response.data.newComment, ...commentList]); 

         
          setmyComment("")
         })
      }

     
        
           return(
            <form onSubmit={handleSubmit}>
            <h3>User: {loggedInUser}</h3>
    
            <label htmlFor="mycomment">Add Comment: </label>
            <textarea
              id="mycomment"
              value={mycomment} 
              onChange={(e) => setmyComment(e.target.value)} 
              style={{ width: '400px', height: '50px' }}
            ></textarea>
    
            <button type="submit">Submit</button>
          </form>
    
           )
        
      
}

