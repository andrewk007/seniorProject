import React from 'react'
import '../pages/Algorithms.css'

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
        title:'BFS'
},
{
    title: 'Fulkerson'
}
];
function Algorithms() {
    return (
        <div className = 'algorithms'>
            <h1> Algorithms</h1>
            {algos.map(function(algo){
                    return <Wrapper>{algo.title} </Wrapper>;
                })}
   

        </div>
    )
}

export default Algorithms
