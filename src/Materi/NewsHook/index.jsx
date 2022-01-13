
import React, { useEffect, useState } from "react";
import { Container} from "react-bootstrap";
import Cardss from "./Card";
import axios from "axios";





const NewsHooks = () => {
   

      
            const[posts, setPosts] = useState([]);
     useEffect(() => {
        
        axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=4994cc78db5f49bfbac2484a02e76cfe')
        .then( function (res) {
            console.log(res)
            if ( res.status === 200) {
                console.log(res)
                setPosts(res.articles)
            }
        } )
         
         console.log(posts)
         
        
     }, []);
    
     return(  
         <div className="row">
            {
                 posts.map(news => 
                     <Cardss img={news.urlToImage} title={news.title} published={news.publishedAt} desc={news.description} link={news.url}/>
                 )
            }
          
        
         </div>
    )
    
}
export default NewsHooks;