import React from 'react';
import styled from 'styled-components';

function Graph(){
  const Node = styled.span`
  display: block;
  color:white;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  margin: 0;
  background: radial-gradient(circle at 100px 100px, white, #000);
`;
    
    const vertices = ['a','b','c'];
        return (
            <>
              {vertices.map(function(name) {
                  return <Node>{name} </Node>
              })}
            </>
        );
}
   

export default Graph