
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormTugas from "./FormTugas";
import NewsHooks from "./NewsHook";
import Client from "./Router/Client";
import Contact from "./Router/Contact";
import Home from "./Router/Home";
import Navigation from "./Router/Navigation";
import Post from "./Router/Post";
import Services from "./Router/Service";
import Computer from "./Router/Service/computer";
import Smartphone from "./Router/Service/smartphone";

const Apps = () => {
    return(
        <div className="main">
          
            <Router >
            <Navigation />
            
               <Routes>
            <Route path="/register" element={<FormTugas/>} />
            <Route path="/news" element={<NewsHooks/>} />
            <Route path="/" element={ <Home/>}/> 
            <Route path="/services" element={ <Services/>}/> 
            <Route path="/contact" element={ <Contact/>}/> 
            <Route path="/client" element={ <Client/>}/> 
            <Route path="/post/:id" element={<Post/>} />
            <Route path="/services/computer" element={<Computer/>} />
            <Route path="/services/computer" element={<Computer/>} />
            <Route path="/services/smartphone" element={<Smartphone/>}/>
                    
                
            
           

            </Routes>
           </Router>
            
        </div>
    )
}

export default Apps;