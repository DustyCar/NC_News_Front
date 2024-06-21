import { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import getArticles from './axiosURLs/getArticles'
import { useSearchParams } from 'react-router-dom';

export function Articles() {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);
  
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  useEffect(() => {
    getArticles(topic).then((response) => {

      setArticles(response.data.rows);
      setLoading(false);
    });
  }, [topic]);

  if (loading) {
    return <p>Page Loading...</p>;
  }

  else {
    return (
      <>
        <section>
          <ul className='articles'>
            {articles.map((article) => {
               return <ArticleCard article={article} key={article.article_id}  />
               })}
          </ul>  
        </section> 
      </>
    )
   }
  }






