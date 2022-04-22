import React from 'react'
import '../AlgoPages/DFS.css'

import Canvas from '../../components/Canvas'


const DFS =() => {
    return (
      <div class="wrapper">
      <header class="page-header">
      <h1> DFS- Depth First Search</h1>
      <h2> Time Complexity: O(V + E) </h2>
      <h3>Data Structure: Graph</h3>
      <p>
      DFS is a traversal algorithm for graph structures. 

      Instead of traversing a graph level by level like BFS, DFS works by starting at the root node,
      and traversing as far as possible along each path before backtracking and exploring another path 
      until it ends. 

      We start from the root node, marking it and moving to a neighbor node that is not marked, continuously doing so.
      After there are no unmarked adjacent nodes for a path, we backtrack and check for other nodes not yet discovered to traverse.

      Applications of DFS:

      -finding paths
      -testing graph properties (bipartite, etc.)
      -detecting cycles
      
      </p>
      </header>
      <main class="page-main">
      </main>
      <div class = 'algo-box'>
      <Canvas algoName = 'DFS'/>
      </div>
      <footer class="page-footer">
      </footer>
      </div>
         );
    }
    
    

export default DFS
