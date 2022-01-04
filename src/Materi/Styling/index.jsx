import React from "react";
import Navbars from "./Bootstrap";
import Biography from "./Bootstrap/Biography";
import Contact from "./Bootstrap/Contact";
import Footer from "./Bootstrap/Footer";


import Skill from "./Bootstrap/Skill";
import Hero from "./Hero";








export default class Styling extends React.Component{
    render(){
        return(
            <div>
              <Navbars/>
              <Hero/>
              <Biography/>
              <Skill/>
              <Contact/>
              <br />
              <br />
              <Footer/>
             
              
             
               
                
            </div>
        )
    }
}