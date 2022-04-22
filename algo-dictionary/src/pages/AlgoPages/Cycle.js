import React from 'react'
import '../AlgoPages/DFS.css'

import Canvas from '../../components/Canvas'


const Cycle =() => {
    return (
      <div class="wrapper">
      <header class="page-header">
      <h1> Cycle Detection</h1>
      <h2> Time Complexity: O(V + E) </h2>
      <h3>Data Structure: Graph</h3>
      <p>A cycle is a path of edges and vertices that form a loop.
      Detecting cycles on a graph can be performed largely by a version of DFS.
      By keeping track of visited nodes and traversing each path fully, we can know that a cycle exists
      when we encounter a node that is not a parent node and has been seen previously. 
       </p>
      </header>
      <main class="page-main">
      </main>
      <div class = 'algo-box'>
      <Canvas algoName = 'Cycle'/>
      </div>
      <footer class="page-footer">
      </footer>
      </div>
         );
    }
    
    

export default Cycle
