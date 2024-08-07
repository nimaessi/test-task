import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import { useState, useRef, useCallback } from "react";

const App = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [arrowStyle, setArrowStyle] = useState({ display: 'none' });

  const coordinatesRef = useRef([]);
  const updateCoordinates = useCallback((newCoordinates) => {
    coordinatesRef.current = newCoordinates;
    setCoordinates(newCoordinates);
  }, []);
  const startNew = () => {
    coordinatesRef.current = [];
    updateCoordinates([]);
  }
  const animateArrow = (start, end) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    
    setArrowStyle({
      display: 'bolck',
      left: start.x,
      top: start.y,
      width: distance,
      transform: `rotate(${angle}deg)`,
      transformOrigin: '0% 50%',
      transition: 'width 1s linear'
    });
  };

  return (
    <div className="container">
        <LeftColumn 
          coordinatesRef = {coordinatesRef}
          arrowStyle = {animateArrow}
          startNew = {startNew}
          updateCoordinates = {updateCoordinates} />
        <RightColumn
          setArrowStyle = {setArrowStyle}
          updateCoordinates={updateCoordinates}
          coordinatesRef = {coordinatesRef}
          animateArrow={animateArrow}  />
    </div>
  )
}
export default App;
