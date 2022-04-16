import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';

const Canvas = () => {
  const [canvas, setCanvas] = useState('');
  const [count,setCount] = useState(0); //number of nodes 
  
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);  
  
  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      selection:false,
      height: 500,
      width: 500,
      backgroundColor: 'white',
    })
  )
  const clearBoard=(canvi)=>{
    setCount(prevCount => prevCount = 0)
    canvi.clear();
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
const addEdge = (canvi) =>{
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
    canvi.renderAll();
  }
})

}
const constructGraph=(canvi)=>{
  const line = makeLine([ 250, 125, 250, 175 ]),
    line2 = makeLine([ 250, 175, 250, 250 ]),
    line3 = makeLine([ 250, 250, 300, 350]),
    line4 = makeLine([ 250, 250, 200, 350]),
    line5 = makeLine([ 250, 175, 175, 225 ]),
    line6 = makeLine([ 250, 175, 325, 225 ]);
    canvi.add(line, line2, line3, line4, line5, line6);
    canvi.add(
      makeCircle(line.get('x1'), line.get('y1'), null, line),
      makeCircle(line.get('x2'), line.get('y2'), line, line2, line5, line6),
      makeCircle(line2.get('x2'), line2.get('y2'), line2, line3, line4),
      makeCircle(line3.get('x2'), line3.get('y2'), line3),
      makeCircle(line4.get('x2'), line4.get('y2'), line4),
      makeCircle(line5.get('x2'), line5.get('y2'), line5),
      makeCircle(line6.get('x2'), line6.get('y2'), line6)
    );
    canvi.on('object:moving', function(e) {
      var p = e.target;
      p.line1 && p.line1.set({ 'x2': p.left, 'y2': p.top });
      p.line2 && p.line2.set({ 'x1': p.left, 'y1': p.top });
      p.line3 && p.line3.set({ 'x1': p.left, 'y1': p.top });
      p.line4 && p.line4.set({ 'x1': p.left, 'y1': p.top });
    });
    canvi.renderAll();
}
  return(
    <div>
      <button onClick={() => constructGraph(canvas)}>Create Graph</button>
      <button onClick={()=>createNode(canvas)}>Add Node</button>
      <button onClick={()=>addEdge(canvas)}>Add Edge</button>
      <button onClick={()=>clearBoard(canvas)}>Clear Board</button>
     <br/><br/>
     <canvas id="canvas" />
    </div>
  );
}

export default Canvas