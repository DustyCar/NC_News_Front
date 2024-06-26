import { useState, useEffect } from 'react';
import axios from 'axios';
import getComments from './axiosURLs/getComments'
import PostComment from './postComment'


//comment card is child of single article 
export function CommentCards({ article_id }) {

  const [commentList, setCommentList] = useState([])
  


  useEffect(() => {
   getComments(article_id).then((response) => {

      setCommentList(response.data.comments);
    }, );
  },[article_id]);


  const hardCodedUser = "jessjelly";

  // Delete comment function
  function deleteComment(comment_id) {
    axios.delete(`https://andrew-nc-news.onrender.com/api/comments/${comment_id}`)
      .then(() => {
        
        // Remove the deleted comment from state
        setCommentList(previousCommentList => previousCommentList.filter(comment => comment.comment_id !== comment_id));
      })
     
  }







  return (
    <>
      <section>
        <h3>Comments</h3>

        <PostComment article_id={article_id} setCommentList={setCommentList} commentList={commentList}/>
       
      

        <ul className='comments'>
          {commentList.map((singleComment) => {
            
            return <li key={singleComment.comment_id} className='commentBox'>
             
              <p>User: {singleComment.author}</p>
              <p>{singleComment.body}</p>
              <p>Posted on: {singleComment.created_at}</p>

              <p className="votes">Votes: {singleComment.votes}</p>
              
              {singleComment.author === hardCodedUser && (
                  <button onClick={() => deleteComment(singleComment.comment_id)}>Delete</button>
                )}


            </li>;
          })}
        </ul>
      </section>
    </>
  );
}
