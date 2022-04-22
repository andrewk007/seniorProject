import React from 'react'
import '../AlgoPages/BFS.css'

import Canvas from '../../components/Canvas'


const BFS =() => {
        return (
      <div class="wrapper">
      <header class="page-header">
      <h1> BFS- Breadth First Search</h1>
      <h2> Time Complexity: O(V + E) </h2>
      <h3>Data Structure: Graph</h3>
      <br>

      </br>
      <p>Breadth-First search is a algorithm that allows traversal and exploration of a given graph level by level. 
      In particular, on a undirected, unweighted graph, BFS will iterate through the graph or tree  
      level by level.
      
      We first select a starting node (in this case, node 1 (colored red)). 
      Then this start node is inserted into the queue, where recursively this algorithm is performed
      to explore all of a given node's neighbors first before moving on to the next node.

      This algorithm has many applications. BFS can be used to:

      -find the shortest path in a unweighted graph
      -mutual friends/social networks
      -solving mazes
      </p>
      <br>
      </br>
      <p>

      </p>
      </header>
      <main class="page-main">
      </main>
      <div class = 'algo-box'>
      <Canvas algoName = 'BFS'/>
      </div>
      <footer class="page-footer">
      </footer>
      </div>
         );
    }
    
    

export default BFS
