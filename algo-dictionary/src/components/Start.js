import React from 'react';
import {FaPlay} from "react-icons/fa";

function Start(){

    const handleClick = () =>{
        console.log('hello bro');
    }
        return (
            <>
            <button onClick = {handleClick}> 
            <FaPlay/>     
            </button>
            </>
        );
}
   

export default Start