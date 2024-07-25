import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import getSingleArticle from "./axiosURLs/getSingleArticle";
import { CommentCards } from "./CommentCards";
import axios from "axios";


export function SingleArticlePage({loggedInUser}) {

  const { article_id } = useParams();
  const [singleArticleData, setSingleArticleData] = useState({});
  const [loading, setLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0)
  const [error, setError] = useState({})
  


  useEffect(() => {
    getSingleArticle(article_id).then((response) => {

      setSingleArticleData(response.data.article[0]);
      setLoading(false);
      setVoteCount(response.data.article[0].votes)    //I've set the initail votes value
    });
  }, []);

  const patchVotes = (incVotes) => {
    return axios.patch(`https://andrew-nc-news.onrender.com/api/articles/${article_id}`, { inc_votes: incVotes })
      .then((response) => {
        setVoteCount(response.data.article.votes)
      }).catch((err) => {
        setError(err)
      })
    }

    const handleUpvote = () => {
      patchVotes(1);
    };
  
    const handleDownvote = () => {
      patchVotes(-1);
    };



  if (loading) {
    return <p>Page Loading...</p>;
  }
  else {
    return (
      <section className="singleArticle">
        <h2 className="singleArticleHead">{singleArticleData.title}</h2>
       
        
        <img className="singleArticleImage" src={singleArticleData.article_img_url} alt="missing image :(" />
        <h3>Topic: {singleArticleData.topic}<br/> Author: {singleArticleData.author}</h3>
        
        <p className="singleArticlePara">{singleArticleData.body}</p>
          <ul> 
          
          <button className="likeButton" onClick={handleUpvote}>Like {voteCount}</button>
          <button onClick={handleDownvote}>Remove Like</button>
          <li>{singleArticleData.comment_count}</li>
          <li className="singleArticleList">Created on {singleArticleData.created_at}</li>
          </ul>

          <CommentCards article_id={article_id} loggedInUser={loggedInUser} />
      </section>
    );
  }
}



