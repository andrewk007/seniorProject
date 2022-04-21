import React, { useState, useEffect,useRef } from 'react';
import {FaPlay} from "react-icons/fa";
import styled from 'styled-components';
import { fabric } from 'fabric';

//what i need to work on:
//LINES!!
// I want nodes to have directional edges (this works in the underlying model), 
// but its hard to represent graphically with arrows.
//add more info about underlying graph on canvas
//then implment the algorithms (cycle detection)
//add boilerplate information about algos/make UI pretty

//if you're awesome: you can try and add weighted edges
//also if you're awesome, make nodes move and edges move too work
//also another thing: making animations dynamic
const Button = styled.button`
width:25px;
height:25px;
`;
const Canvas = (algorithmName) => {
  const algoName = algorithmName.algoName;
  const [canvas, setCanvas] = useState('');
  const [count,setCount] = useState(0); //number of nodes 
  const [numEdges,setEdges] = useState(0); //number of edges
  const [data,setData] = useState('cursor') //canvas drawing options
  const [secondEdge,setEdge] = useState(false);
  const [graph,setGraph] = useState({})
  const data1 = React.useRef(data)
  const count1 = React.useRef(0)
  const edgeAttempt = React.useRef(secondEdge)
  const [visitedPath,setPath] = useState('');
//storing the number of edges and number of nodes
class Graph{
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1,vertex2){
    if (this.adjacencyList[vertex1]&&this.adjacencyList[vertex2]){
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1); // delete this for a directed graph 
    }
  }
  removeEdge(vertex1,vertex2){
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
    }
  }
  removeVertex(vertex){
    if (this.adjacencyList[vertex]){
      this.adjacencyList[vertex].forEach((v) => this.removeEdge(vertex,v));
      delete this.adjacencyList[vertex];
    }
  }
  printGraph(){
    for (const[key,value] of Object.entries(this.adjacencyList)){
      console.log(key,value);
    }
    console.log("TEST");
  }
  getEdges(vertex){
    return this.adjacencyList[vertex];
  }
}
const breadthFirst= (startVertex,adjacencyList) => {
  const queue = [startVertex];
  const result = [];
  const visited = {};
  let currentVertex;

  visited[startVertex] = true;
  while (queue.length){
    currentVertex = queue.shift();
    result.push(currentVertex);

    adjacencyList[currentVertex].forEach((neighbor)=>{
      if (!visited[neighbor]){
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return result;
};
const shortestPath= (startVertex,adjacencyList,goalVertex) => {
  return path;
  //shortest path implementation
};
const cycleDetection = (startVertex,adjacencyList)=>{
  return path;
}
const depthFirst= (startVertex,adjacencyList) => {
  const stack = [startVertex];
  const result = [];
  const visited = {};
  let currentVertex;

  visited[startVertex] = true;
  while (stack.length){
    currentVertex = stack.pop();
    result.push(currentVertex);

    adjacencyList[currentVertex].forEach((neighbor)=>{
      if (!visited[neighbor]){
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }
  return result;
};
const GRAPH = graph;
  const setData1 = x => {
    data1.current = x;
    setData(x);
    }

    const setCount1 = x => {
      count1.current = x+1;
      setCount(prevCount => prevCount + 1)
    }
    const setEdgeAttempt = x =>{
      edgeAttempt.current = x;
      setEdge(x)
      
    }
  useEffect(()=>{
    setCanvas(initCanvas());
    //initialize new graph data structure on page creation
    const newGraph = new Graph();
    setGraph(newGraph);
  },[])
  useEffect(()=>{
    console.log("Rerendered!");
    console.log("this is our new state: ",data1.current);

    if (data1.current === 'node'){
      console.log("this is equal to node!: ",data1.current);
    createNode(canvas);
    }
    if (data1.current === 'edge'){
      console.log("this is equal to edge: ",data1.current);
      createEdge(canvas);
    }
    if (data1.current === 'cursor'){
      console.log("this is equal to cursor: ",data1.current)
    }
  },[data1.current,edgeAttempt.current,graph])
  const setAction= (event) =>{
    console.log("We have changed radio buttons!!!!");
    console.log(event.target.value);
    setData1(event.target.value);
  }
  const addedNode = () =>{
    console.log("Added node!");
    setCount1(count1.current);
  }
  const createNode=(canvi)=>{
    canvi.off('mouse:down');
    console.log("Running create node");
   canvi.on('mouse:down',function(e){
    if (data1.current === 'node' && e.target === null){
    const mouseX = e.e.layerX;
    const mouseY = e.e.layerY;
    if (count1.current === 0){
      addedNode()
      GRAPH.addVertex(count1.current);
      console.log("underlying graph: ")
    GRAPH.printGraph();
    setGraph(GRAPH);
    console.log("edges");
    GRAPH.getEdges('1');
    console.log("total nodes:",count1.current);
    
    const circle = makeCircle(mouseX,mouseY,count1.current,null,null,null,null,'red')
    canvi.add(circle);
    console.log(data1.current)
    }
else{
  addedNode()
  //add node with underlying graph
  GRAPH.addVertex(count1.current);
  console.log("underlying graph: ")
  GRAPH.printGraph();
  setGraph(GRAPH);
  console.log("edges");
  GRAPH.getEdges('1');
  console.log("total nodes:",count1.current);
  
  const circle = makeCircle(mouseX,mouseY,count1.current,null,null,null,null,'white')
  canvi.add(circle);
  console.log(data1.current)
}
  }
  else{
    console.log("dont create node")
  }
canvi.renderAll();
   });
}
  const createClear=(canvi)=>{
    console.log("Activated createClear")
    setGraph(new Graph());
    setCount1(-1);
    setCount(0);
    setPath('');
    setEdges(0);
    canvi.remove.apply(canvi,canvi.getObjects())
    canvi.renderAll();
  }

  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      selection:true
    })
  )

  const makeCircle = (left,top,id,line1,line2,line3,line4,fill)=>{
    const circle = new fabric.Circle({
      id: id,
      originX:'center',
      originY:'center',
      strokeWidth:5,
      radius:15,
      fill: fill,
      stroke: '#666',
    })
    const text = new fabric.Text(String(id),{
      fontSize: 20,
      originX:'center',
      originY:'center'
    });
    const group = new fabric.Group([circle,text],{
      id:id,
      left:left,
      top:top,
      originX:'center',
      originY:'center',
      lockMovementX:true,
      lockMovementY:true
    });
    circle.hasControls = circle.hasBorders = true;
    circle.line1 = line1;
    circle.line2 = line2;
    circle.line3 = line3;
    circle.line4 = line4;
    return group;
  }
  const makeLine=(coords,id)=>{
    var [x1,y1,x2,y2] = coords;
    const line = new fabric.Line([x1,y1,x2,y2],{
      id:id,
      fill:'red',
      stroke:'red',
      strokeWidth:5,
      selectable:false,
      evented:false
    })
    // line.triangle = new fabric.Triangle({
    //   width: 15, 
    //   height: 15, 
    //   fill: 'red', 
    //   left: x2, 
    //   top: y2,
    //   angle: 0
    // })
   // const pointedLine = new fabric.Group([line,line.triangle]);
    return line;
}
const selectObject = (objectID,canvi)=>{
  canvi.getObjects().forEach(function(o) {
    if (o.id === objectID){
      return canvi.setActiveObject(o);
    }
  })
}
const handleClick = () => {
  //activate algorithm
  if (algoName === 'BFS'){
    var path = breadthFirst(1,GRAPH.adjacencyList);
    console.log(path);
    setPath(path);
  }
  else if (algoName === 'DFS'){
    var path = depthFirst(1,GRAPH.adjacencyList);
    console.log(path);
    setPath(path);
  }
  else if(algoName === 'SPH'){
//call shortest path and generate new eleemnt that allows user to input 
// the 'destination' node.
    const finalNode = 4;
    var path = shortestPath(1,GRAPH.adjacencyList,finalNode);
    console.log(path);
    setPath(path);
  }
  else if (algoName === 'Cycle'){
  //call that algo
  var path = cycleDetection(1,GRAPH.adjacencyList);
  console.log(path);
  setPath(path);
  }
  else{
    console.log("Algorithm: ",algoName);
  }
  }
const createEdge = (canvi) =>{
//mouse down: if its an object, get its coordinates
//second mouse down: if its an object get the second coordinates
//draw line between the two objects
canvi.off('mouse:down');
canvi.on('mouse:down',(e) => { 
  if (data1.current === 'edge'){
    if (e.target){//we have clicked on the first node
      var obj1 = canvi.getActiveObject();
      const mouseX1 = obj1.left;
      const mouseY1 = obj1.top;
      const firstID = obj1.get('id');
      console.log("This is a node object: first clicked")
      canvi.off('mouse:down')
      canvi.on('mouse:down',(j)=>{
        if (j.target){// we have clicked on second node\
          console.log("second node clicked!")
          var obj2 = canvi.getActiveObject();
          const list_edges = GRAPH.getEdges(obj1.get('id'));//returns list of nodes (number) adjacent
          if (list_edges.includes(obj2.id)){
            console.log("edge already exists between nodes: ",obj1.id," and ",obj2.id);
          }
          else{
            setEdges(prevCount => prevCount + 1)
            const mouseX2 = obj2.left;
            const mouseY2 = obj2.top;
            const secondID = obj2.get('id');
            GRAPH.addEdge(firstID,secondID);
            GRAPH.printGraph();
            setGraph(GRAPH);
            const newLine = makeLine([mouseX1,mouseY1,mouseX2,mouseY2],count1.current);
            canvi.add(newLine);
            newLine.sendToBack();
            obj1.moveLine = function(){//edit so multipile edges can also be moved. i.e., loop     
              var x1 = obj1.left;
              var y1 = obj1.top;
              newLine.set({'x1':x1,'y1':y1});
            };
            obj2.moveLine = function(){ 
              var x2 = obj2.left;
              var y2 = obj2.top;
              newLine.set({'x2':x2,'y2':y2});
            };
          }
          canvi.renderAll(); 
          if (edgeAttempt.current === true){//rerender component to reset to first node search click
            setEdgeAttempt(false)
          }
          else{
            setEdgeAttempt(true)
          }
        }
        else{
          console.log("second mouse click not an object model!")
          if (edgeAttempt.current === true){
            setEdgeAttempt(false)
          }
          else{
            setEdgeAttempt(true)
          }
        }
      })
    }
    else{
      console.log("we are clicking on a non-node object!")
    }
  }
  else{
    console.log("we are not doing edge!!!!!")
    console.log(count1.current)
  }
  canvi.renderAll();
})
//canvi on object moving
canvi.on('object:moving',function(e){
  e.target.moveLine();
  canvi.renderAll();
})
}
  return(
    <div>
      <Button onClick = {handleClick}>
      <FaPlay/> 
      </Button>
      <p>Traversal Path: [{visitedPath}] </p>
      <p>Order: {count}</p>
      <p>Size: {numEdges} </p>
      <div onChange={setAction.bind(this)}> 
      <input class="switch" name="iconOn" type="radio" id="on" value = "cursor"
      />
      <b>Cursor  </b>
      <input class="switch" name="iconOn" type="radio" id="on" value = "node"
      />
      <b>Node</b>
      <input class="switch" name="iconOn" type="radio" id="off" value = "edge"
      />
      <b>Edge</b>
      </div>
      <button onClick={()=>createClear(canvas)}>
        <b>Clear Board</b>
      </button>
     <canvas id="canvas" width = "700" height = "500" style = {{border: '1px solid brown'}} />
    </div>
  );
}

export default Canvas