import React from 'react'
import '../AlgoPages/ShortestPath.css'
import Canvas from '../../components/Canvas'

function ShortestPath() {
    return (
      <div class="wrapper">
      <header class="page-header">
          <h1> Shortest Path</h1>
          <h2> Time Complexity: O(V + E)</h2>
        <p>The time complexity and implementation of a shortest path algorithm
        largely depends on how the graph is represented.
        
        For a shortest path algorithm for a undirected, unweighted graph, this algorithm
        can be implemented through a version of BFS.
         </p>
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
