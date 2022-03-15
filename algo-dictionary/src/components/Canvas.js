import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
const Canvas = () => {
  const [canvas, setCanvas] = useState('');
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);  
  
  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: 'pink'
    })
  );  
  const addCircle = canvi => {
    const circle = new fabric.Circle({
      radius: 30, fill: '#f55', top: 100, left: 100
    });
    canvi.add(circle);
    canvi.renderAll();
  }
  return(
    <div>
      <h1>Fabric.js on React - fabric.Canvas('...')</h1>
      <button onClick={() => addCircle(canvas)}>Add Node</button>
     <br/><br/>
     <canvas id="canvas" />
    </div>
  );
}

export default Canvas