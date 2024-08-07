import React, { useState, useEffect, useRef } from 'react';
import Dots from './module/Dots';

const RightColumn = ({updateCoordinates,coordinatesRef }) => {
  const trackingRef = useRef(false);
  const parentRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (trackingRef.current) {
      const newCoord = { x: e.clientX, y: e.clientY, color: "red" };
      coordinatesRef.current.push(newCoord);
      updateCoordinates([...coordinatesRef.current]);
    }
  };

  const handleMouseDown = (e) => {
    if(parentRef.current.id === "gray"){
      trackingRef.current = true;
    }
  };

  const handleMouseUp = () => {
    trackingRef.current = false;
  };
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="column right-column">
        <p><strong>Hold the left mouse button and drag on the gray screen</strong></p>
        <div id = "gray" ref = {parentRef}>
        <h1>Mouse Tracker</h1>
          {coordinatesRef.current.map((coord, index) => (
           <Dots key = {index} coord = {coord} />
          ))}
        </div>
    </div>
  )
}

export default RightColumn;