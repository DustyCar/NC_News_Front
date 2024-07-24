import './App.css'
import { Header } from './Header'
import { Nav } from './Nav'
import { Articles } from './Articles';
import { Route, Routes } from "react-router-dom";
import { SingleArticlePage } from './SingleArticlePage';
import { Users } from "./Users"
import { useState } from 'react';

function App() {
  
   const [loggedInUser, setLoggedInUser] = useState("jessjelly")

   

  return (
    <>
       <Header loggedInUser={loggedInUser} />
       <Nav />
       
       <Routes>
           <Route path="/" element={<Articles />}/> 

           <Route path="/articles" element={<Articles />} />
           
           <Route path="/articles/:article_id" element={<SingleArticlePage  loggedInUser={loggedInUser}/>}  />
          
           <Route path="/users" element={<Users  setLoggedInUser={setLoggedInUser}/>} />
       </Routes>
    </>
  )
}

export default App









