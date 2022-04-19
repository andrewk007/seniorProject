import React, { useState, useEffect,useRef } from 'react';
import { fabric } from 'fabric';

const Canvas = () => {
  const [canvas, setCanvas] = useState('');
  const [count,setCount] = useState(0); //number of nodes 
  const [data,setData] = useState('cursor') //canvas drawing options
  const [secondEdge,setEdge] = useState(false)
  const data1 = React.useRef(data)
  const count1 = React.useRef(0)
  const edgeAttempt = React.useRef(secondEdge)
  const setData1 = x => {
    data1.current = x;
    setData(x);
    }
    const setCount1 = x => {
      count1.current = x+1;
      setCount(x)
    }
    const setEdgeAttempt = x =>{
      edgeAttempt.current = x;
      setEdge(x)
    }
  useEffect(()=>{
    setCanvas(initCanvas());

  },[])
  useEffect(()=>{
    console.log("Rerendered!")
    console.log("this is our new state: ",data1.current)
    if (data1.current === 'node'){
      console.log("this is equal to node!: ",data1.current)
    createNode(canvas)
    }
    if (data1.current === 'edge'){
      console.log("this is equal to edge: ",data1.current)
      createEdge(canvas)
    }
    if (data1.current === 'cursor'){
      console.log("this is equal to cursor: ",data1.current)
    }

  },[data1.current,edgeAttempt.current])
  const setAction= (event) =>{
    console.log("We have changed radio buttons!!!!")
    console.log(event.target.value);
    setData1(event.target.value)
  }
  const addedNode = () =>{
    console.log("Added node!")
    setCount1(count1.current)
  }
  const createNode=(canvi)=>{
    canvi.off('mouse:down')
    console.log("Running create node")
   canvi.on('mouse:down',function(e){
    if (data1.current === 'node' && e.target === null){

    addedNode()
    console.log("total nodes:",count1.current);
    const mouseX = e.e.layerX;
    const mouseY = e.e.layerY;
    const circle = makeCircle(mouseX,mouseY,count1.current,null,null,null,null,'red')
    canvi.add(circle);
    console.log(data1.current)
  }
  else{
    console.log("dont create node")
  }
canvi.renderAll();
   });
}

  const createClear=(canvi)=>{
    console.log("Activated createClear")
    setCount1(-1)
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
      left:left,
      top:top,
      originX:'center',
      originY:'center',
      strokeWidth:5,
      radius:12,
      fill: fill,
      stroke: '#666',

    })
    circle.hasControls = circle.hasBorders = true;

    circle.line1 = line1;
    circle.line2 = line2;
    circle.line3 = line3;
    circle.line4 = line4;
    return circle;
  }
  const makeLine=(coords)=>{
    return new fabric.Line(coords,{
      fill:'red',
      stroke:'red',
      strokeWidth:5,
      selectable:true
    })
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
      console.log("This is a node object: first clicked")
      canvi.off('mouse:down')
      canvi.on('mouse:down',(j)=>{
        if (j.target){// we have clicked on second node
          console.log("second node clicked!")
          var obj2 = canvi.getActiveObject();

          const mouseX2 = obj2.left;
          const mouseY2 = obj2.top;
          const newLine = makeLine([mouseX1,mouseY1,mouseX2,mouseY2]);
          canvi.add(newLine);
          canvi.renderAll();
          console.log("attempted line creation!")
          //rerender component to reset to first node search click
          if (edgeAttempt.current === true){
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
}


  return(
    <div>
      <p>Visited: </p>
      <p>Queue</p>
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
     <canvas id="canvas" width = "700" height = "500" style = {{border: '1px solid black'}} />
    </div>
  );
}

export default Canvas