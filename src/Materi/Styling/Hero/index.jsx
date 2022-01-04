import React from "react";
import "./style.scss"

export default class Hero extends React.Component{

    render (){
        return(
         <div>
            
            <div class="p-5 mb-4 bg-light rounded-3 jumbotron" id="home">
            <div class="container-fluid py-5 text-center">
                <p class="fs fst-italic mt-5">CEO & FOUNDER AILEEN INDONESIA</p>
                <h1 class="display-4">Ilyas Dewanto</h1>
                <button class="btn btn-warning border border-dark btn-sm mt-5 shadow-sm text-white px-3 py-2">
                    Linkedin Profile
                </button>
            </div>
            </div>
            </div>
        )
    }

}