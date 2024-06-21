import { Link } from 'react-router-dom';


export default function ArticleCard(props){
   
    return (
        <Link to={`/articles/${props.article.article_id}`}>  
           <li key={props.article.article_id}>
                   <h3>{props.article.title}</h3>
                <img src={props.article.article_img_url} alt={props.article.title} />
           </li>
        </Link>    
    )
}