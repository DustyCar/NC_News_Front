import { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import getArticles from './axiosURLs/getArticles'

export function Articles() {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(getArticles()).then((response) => {

      setArticles(response.data.rows);
      setLoading(false);
    });
  }, []);

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






