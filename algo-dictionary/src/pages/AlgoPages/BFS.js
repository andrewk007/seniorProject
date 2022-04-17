import React,{Component,useState} from 'react'
import '../AlgoPages/BFS.css'

import Canvas from '../../components/Canvas'

import {FaPlay} from "react-icons/fa";
import styled from 'styled-components';
const Button = styled.button`
width:25px;
height:25px;
`;
const BFS =() => {

  const handleClick = () =>{
      console.log('hello bro');
  }

        return (
      <div class="wrapper">
      <header class="page-header">
      <h1> BFS- Breadth First Search</h1>
      <h2> Time Complexity: O(V + E) </h2>
      <h3>Data Structure: Graph</h3>
      <p></p>
      </header>
      <main class="page-main">
      </main>
      <div class = 'algo-box'>
       
      <Button onClick = {handleClick}>
      <FaPlay/> 
      </Button>    
      
      <Canvas/>
      </div>
      <footer class="page-footer">
      </footer>
      </div>
         );
    }
    
    

export default BFS
