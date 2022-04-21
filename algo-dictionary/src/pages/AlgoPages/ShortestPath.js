import React from 'react'
import '../AlgoPages/ShortestPath.css'
import Canvas from '../../components/Canvas'

function ShortestPath() {
    return (
      <div class="wrapper">
      <header class="page-header">
          <h1> Shortest Path</h1>
          <h2> Time Complexity: </h2>
        <p></p>
      </header>
      <main class="page-main">
      </main>
      <div class = 'algo-box'>
      <Canvas algoName = 'SPH'/>
     </div>
      <footer class="page-footer">
      </footer>
    </div>
        );
}

export default ShortestPath
