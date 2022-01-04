import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border: 2px solid black;
    background-color: white;
    color: blue;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    border-color: lightblue;
    color: dodgerblue;
    border-radius: 5px;
    
    &:hover{
        background-color: lightblue;
    color: rgb(0, 33, 66);
    }
    
`;
export default class Styled extends React.Component{
render(){
    return(
        <div>
             <Button>Go Somewhere</Button>
        </div>
    )
}
}