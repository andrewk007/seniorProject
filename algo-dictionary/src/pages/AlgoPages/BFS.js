import React,{Component} from 'react'
import '../AlgoPages/BFS.css'
import Start from '../../components/Start'
import Graph from '../../components/Graph'
import Canvas from '../../components/Canvas'
import {useState} from 'react'

const BFS =() => {
        return (
            <div class="wrapper">
       <header class="page-header">
           <h1> BFS- Breadth First Search</h1>
           <h2> Time Complexity: O(V + E) </h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </header>
       <main class="page-main">
       </main>
       <div class = 'algo-box'>
       
       <Start/>
       <Canvas/>

      </div>
       <footer class="page-footer">
       </footer>
     </div>
         );
    }
    

export default BFS
