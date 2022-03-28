import React from 'react';
import {FaPlay} from "react-icons/fa";
import styled from 'styled-components';
function Start(){
    const Button = styled.button`
    width:25px;
    height:25px;
  `;
    const handleClick = () =>{
        console.log('hello bro');
    }
        return (
            <>
            <Button onClick = {handleClick}>
            <FaPlay/> 
            </Button>    
            <p>Visited: </p>
            <p>Queue</p>
            
            </>
        );
}
   

export default Start