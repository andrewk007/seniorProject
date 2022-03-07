import React from 'react'
import '../pages/Algorithms.css'
import {Link, NavLink} from "react-router-dom";
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
        title:'BFS',
        link: '/bfs'
},
{
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
                        <NavLink to = {algo.link}>
                            {algo.title}
                        </NavLink>
                    </Wrapper>
                })}
        
        </div>
    )
}

export default Algorithms