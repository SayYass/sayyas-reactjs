import React from "react";

import style from "./index.module.css"

export default class Coba extends React.Component{
    render(){
        return(
            <div>
                <button className={`${style.btn} ${style.info}`}>Go Somewhere</button>
            </div>
        
        )
    }
}