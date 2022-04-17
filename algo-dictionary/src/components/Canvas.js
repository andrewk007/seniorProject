import React, { useState, useEffect,useRef } from 'react';
import { fabric } from 'fabric';

const Canvas = () => {
  const [canvas, setCanvas] = useState('');
  const [count,setCount] = useState(0); //number of nodes 
  const [data,setData] = useState('cursor')
  const data1 = React.useRef(data)
  const count1 = React.useRef(0)
  const setData1 = x => {
    data1.current = x;
    setData(x);
    }
    const setCount1 = x => {
      count1.current = x+1;
      setCount(x)
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
  },[data1.current])
  const setAction= (event) =>{
    console.log("We have changed radio buttons!!!!1")
    console.log(event.target.value);
    setData1(event.target.value)
  }
  const addedNode = () =>{
    console.log("Added node!")
    setCount1(count1.current)
  }
  const createNode=(canvi)=>{
    console.log("Running create node")
   canvi.on('mouse:down',function(e){
    if (data1.current === 'node'){
    addedNode()
    console.log("total nodes:",count1.current)
     console.log(e.e.clientX)
     console.log("this is running!!!!")
     console.log(data1.current)
  }
  else{
    console.log("dont create node")
    canvi.off('mouse:down')
  }

   });
}
  const createClear=(canvi)=>{
    console.log("Activated createClear")
    setCount(prevCount => prevCount = 0)
    canvi.remove.apply(canvi,canvi.getObjects())

    canvi.renderAll();
  }

  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      selection:true
    })
  )

  
 
  const makeCircle = (left,top,id,line1,line2,line3,line4,fill,opacity)=>{
    const circle = new fabric.Circle({
      id: id,
      left:left,
      top:top,
      strokeWidth:5,
      radius:12,
      fill: fill,
      stroke: '#666',
      opacity: opacity
    })
    circle.hasControls = circle.hasBorders = false;

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
      selectable:false,
      evented:false,
    })
}
const createEdge = (canvi) =>{
//mouse down: if its an object, get its coordinates
//second mouse down: if its an object get the second coordinates
//draw line between the two objects

canvi.on('mouse:down',(e) => {
  if (data1.current === 'edge'){
    console.log("we are in edge!!!!!")
  }
  else{
    console.log("we are not doing edge!!!!!")
  }
})
canvi.renderAll()

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