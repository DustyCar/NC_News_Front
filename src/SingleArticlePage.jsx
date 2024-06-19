import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import getSingleArticle from "./axiosURLs/getSingleArticle";
import { CommentCards } from "./CommentCards";

export function SingleArticlePage() {

  const { article_id } = useParams();
  const [singleArticleData, setSingleArticleData] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getSingleArticle(article_id).then((response) => {

      setSingleArticleData(response.data.article[0]);
      setLoading(false);
    });
  }, []);


  if (loading) {
    return <p>Page Loading...</p>;
  }
  else {
    return (
      <section className="singleArticle">
        <h2>{singleArticleData.title}</h2>
        <h3>Topic: {singleArticleData.topic}</h3>
        <img className="singleArticleImage" src={singleArticleData.article_img_url} alt="missing image :(" />
        <h4>Author: {singleArticleData.author}</h4>
        
        <p>{singleArticleData.body}</p>
          <ul> 
          
          
          <li>{singleArticleData.votes}</li>
          <li>UpVotes{singleArticleData.comment_count}</li>
          <li>Created on {singleArticleData.created_at}</li>
          </ul>

          <CommentCards article_id={article_id} />
        
     

      </section>
    );
  }
}



