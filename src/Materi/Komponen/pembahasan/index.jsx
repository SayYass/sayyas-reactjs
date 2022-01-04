import React from "react";
import ClassComponent from "./ClassComponent.jsx";
import FunctionalComponent from "./FunctionalComponent.jsx";

export default class Komponen extends React.Component{
    render(){
       return (<div>
            <ClassComponent nama="Ilyas Dewanto"/>
            <FunctionalComponent />
        </div>)
    }
}