import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './Header'
import { Nav } from './Nav'
import axios from 'axios';

function App() {
  

  return (
    <>
       <Header />
       <Nav />
       <Articles />
    </>
  )
}

export default App



function Articles() {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        axios.get("https://andrew-nc-news.onrender.com/api/articles").then((response) => {
            
          setArticles(response.data.rows);
          setLoading(false);
       })
      }, [])

      if(loading){
        return <p>Page Loading...</p>
    }
    else {
      return (
        <>
          <section>
            <ul className='articles'> 
              {articles.map((article) => (
                <li key={article.article_id}>
                  <h4>{article.title}</h4>
                  <img src={article.article_img_url} alt={article.title} />
                  
                  
                </li>
              ))}
            </ul>
          </section>
        </>
      );
  
}
}

