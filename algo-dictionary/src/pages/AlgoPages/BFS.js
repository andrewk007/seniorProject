import React,{Component} from 'react'
import '../AlgoPages/BFS.css'
import Start from '../../components/Start';
import Graph from '../../components/Graph';
import {ReactHeight} from 'react-height';
function BFS(){
        return (
            <div class="wrapper">
       <header class="page-header">
           <h1> BFS- Breadth First Search</h1>
           <h2> Time Complexity: O(V + E) </h2>
         <p></p>
       </header>
       <main class="page-main">
       </main>
       <div class = 'algo-box'>
       
       <Start/>
      <Graph/>

      </div>
       <footer class="page-footer">
       </footer>
     </div>
         );
    }
    

export default BFS
