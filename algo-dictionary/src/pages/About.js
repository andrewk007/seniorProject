import React from 'react'
import '../pages/About.css'
import styled from 'styled-components';

const Wrapper = styled.section`
  display:flex;
  background-color:white;
  color:black;
  width:auto;
  height:auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const summary = 'This website exists to help break down complex algorithms intuitively, allowing the user to manipulate parameters and visually break down the problem.';


const algos = [
    {
        title:'BFS'
},
{
    title: 'Fulkerson'
}
];

function About() {
    return (
        <div className = 'about'>
            {summary}
            <ul>
                {algos.map(function(algo){
                    return <Wrapper>{algo.title} </Wrapper>;
                })}
            </ul>
        </div>
    );
}

export default About
