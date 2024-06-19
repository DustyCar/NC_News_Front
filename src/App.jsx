import './App.css'
import { Header } from './Header'
import { Nav } from './Nav'
import { Articles } from './Articles';
import { Route, Routes } from "react-router-dom";
import { SingleArticlePage } from './SingleArticlePage';


function App() {
  

  return (
    <>
       <Header />
       <Nav />
       
       <Routes>
           <Route path="/" element={<Articles />}/> 
           <Route path="/articles/:article_id" element={<SingleArticlePage />} />
           
       </Routes>
    </>
  )
}

export default App









