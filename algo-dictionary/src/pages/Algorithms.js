import React from 'react'
import '../pages/Algorithms.css'
import {Link} from "react-router-dom";
import styled from 'styled-components';
const Wrapper = styled.section`
  display:flex;
  background-color:white;
  color:black;
  width:auto;
  height:auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const algos = [
    {
        id: 1,
        title:'BFS',
        link: '/bfs'
},
{
    id: 2,
    title:'shortestPath',
    link: '/shortest'
}

];
const Algorithms =()=>{
    return (
        <div className = 'algorithms'>
            <h1> Algorithms</h1>
            {algos.map(function(algo){
                    return <Wrapper>
                        <Link style = {{textDecoration:'none'}} to = {algo.link}>
                            {algo.title}
                        </Link>
                    </Wrapper>
                })}
        
        </div>
    )
}

export default Algorithms