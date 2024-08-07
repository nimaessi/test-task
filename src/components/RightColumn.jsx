import React, { useState, useEffect, useRef } from 'react';
import Dots from './module/Dots';
import Arrow from './module/Arrow';

const RightColumn = ({updateCoordinates,coordinatesRef,setArrowStyle,arrowStyle }) => {
  const trackingRef = useRef(false);
  
  const handleMouseMove = (e) => {
    if (trackingRef.current) {
      const newCoord = { x: e.clientX, y: e.clientY };
      coordinatesRef.current.push(newCoord);
      updateCoordinates([...coordinatesRef.current]);
    }
  };

  const handleMouseDown = () => {
    trackingRef.current = true;
    setArrowStyle({ display: 'none' });
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
        <div>
        <h1>Mouse Tracker</h1>
          {coordinatesRef.current.map((coord, index) => (
           <Dots key = {index} coord = {coord} />
          ))}
          {/* Show animation from the first coordinate to the last coordinate */}
          <Arrow arrowStyle = {arrowStyle} />
        </div>
    </div>
  )
}

export default RightColumn;