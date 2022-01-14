import Navigation from "./Navigation"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Services from "./Service";
import Contact from "./Contact";
import Client from "./Client";
import Post from "./Post";
import Computer from "./Service/computer";
import Smartphone from "./Service/smartphone";

const Routing = () => {
    return(
        <div className="main">
          
            <Router >
            <Navigation />
            
               <Routes>

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

export default Routing;