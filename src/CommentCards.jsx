import { useState, useEffect } from 'react';
import axios from 'axios';
import getComments from './axiosURLs/getComments'

//comment card is child of single article 
export function CommentCards({ article_id }) {

  const [commentList, setCommentList] = useState([]);


  useEffect(() => {
   getComments(article_id).then((response) => {

      setCommentList(response.data.comments);
    }, []);
  });



  return (
    <>
      <section>
        <h3>Comments</h3>
        <ul className='comments'>
          {commentList.map((singleComment) => {
            return <li key={singleComment.comment_id} className='commentBox'>
              <li>User: {singleComment.author}</li>
              <p>{singleComment.body}</p>
              <li>Posted on: {singleComment.created_at}</li>

              <p className="votes">Votes: {singleComment.votes}</p>




            </li>;
          })}
        </ul>
      </section>
    </>
  );
}
