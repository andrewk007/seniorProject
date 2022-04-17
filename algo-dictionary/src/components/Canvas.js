import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';

const Canvas = () => {
  const [canvas, setCanvas] = useState('');
  const [count,setCount] = useState(0); //number of nodes 
  const [optionType,setOptionType] = useState('Cursor')
  
  useEffect(()=>{
    setCanvas(initCanvas());

  },[])

  useEffect(() => { //runs every time it renders, and renders every time optionType changes
    console.log("Changing option button")
    console.log("became: ",optionType)
    if (optionType==='Clear')
    createClear(canvas) 
    if (optionType === 'Edge')
    createEdge(canvas)
    if (optionType==='Node')
    createNode(canvas)
    
    
  }, [optionType]);  
  
  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      selection:true
    })
  )
  const createClear=(canvi)=>{
    setCount(prevCount => prevCount = 0)
    canvi.remove.apply(canvi,canvi.getObjects())
    canvi.renderAll();
  }
  
  const createNode=(canvi)=>{
    setCount(prevCount => prevCount+1)
    console.log(count)
    if (count === 0){
      canvi.add(makeCircle(250,250,count,null,null,null,null,"red"))
    }
    else{
    canvi.add(
      makeCircle(250,250,count,null,null,null,null,"white")
    )
    }
    canvi.renderAll();
  }
  const makeCircle = (left,top,id,line1,line2,line3,line4,fill)=>{
    const circle = new fabric.Circle({
      id: id,
      left:left,
      top:top,
      strokeWidth:5,
      radius:12,
      fill: fill,
      stroke: '#666'
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
  if (e.target){
    console.log("clicked on first object")
    console.log(e.e.clientY)
    console.log(e.e.clientX)
    
    var line = makeLine([e.e.clientX,e.e.clientY])

    canvi.on('object:moving', function(e) {
      var p = e.target;
      p.line1 && p.line1.set({ 'x2': p.left, 'y2': p.top });
     
    });
  }
})
canvi.renderAll()

}
  return(
    <div>
    <button onClick={()=>setOptionType('Cursor')}>Cursor</button>
      <button onClick={()=>setOptionType('Node')}>Add Node</button>
      <button onClick={()=>setOptionType('Edge')}>Add Edge</button>
      <button onClick={()=>setOptionType('Clear')}>Clear Board</button>
     <br/><br/>
     <canvas id="canvas" width = "700" height = "500" style = {{border: '1px solid red'}} />
    </div>
  );
}

export default Canvas