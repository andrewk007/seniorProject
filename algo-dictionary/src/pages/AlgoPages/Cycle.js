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
      <p></p>
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
