
import React, { useEffect, useState } from "react";

import Cardss from "./Card";
import axios from "axios";
import Navbars from "./Navbars";
import { FormControl, InputGroup } from "react-bootstrap";







const NewsHooks = () => {
   

      
            const[posts, setPosts] = useState([]);
    
            const[key, setKey] = useState('');

            useEffect(() => {
                console.log('getApi');
                axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=c7622167c98040f9b2a4c4ec591a66b2')
                .then(res => setPosts(res.data.articles))
            }, [])
            useEffect(() => {
                console.log('getApiFilter');
                axios.get(`https://newsapi.org/v2/everything?q=${key}&apiKey=c7622167c98040f9b2a4c4ec591a66b2`)
                .then(res => setPosts(res.data.articles))
            }, [key])
            
      
    
     return(  
         <div className="row">
             <Navbars/>
             <InputGroup className="mb-3 mt-5 " id="src" name="key">
    <FormControl Style placeholder="Search News" name="key" type= "text"
    onChange ={e => setKey(e.target.value) } value={key}/>
    <InputGroup.Text id="basic-addon2"> <button type="submit">Search</button> </InputGroup.Text>
  </InputGroup>
            {
                 posts.map(news => 
                     <Cardss img={news.urlToImage} title={news.title} published={news.publishedAt} desc={news.description} link={news.url}/>
                 )
            }
          
        
         </div>
    )
    
}
export default NewsHooks;