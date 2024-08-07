import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import { useState, useRef, useCallback } from "react";

const App = () => {
  const [coordinates, setCoordinates] = useState([]);

  const coordinatesRef = useRef([]);
  const updateCoordinates = useCallback((newCoordinates) => {
    coordinatesRef.current = newCoordinates;
    setCoordinates(newCoordinates);
  }, []);
  const startNew = () => {
    coordinatesRef.current = [];
    updateCoordinates([]);
  }
  const animateColors = () => {
    const coords = [...coordinatesRef.current];
    coords.forEach((coord, index) => {
      setTimeout(() => {
        coords[index].color = 'blue';
        setCoordinates([...coords]);
      }, 5 * index);
    });
  };

  return (
    <div className="container">
        <LeftColumn 
          coordinatesRef = {coordinatesRef}
          startNew = {startNew}
          animateColors={animateColors} 
          updateCoordinates = {updateCoordinates} />
        <RightColumn
          updateCoordinates={updateCoordinates}
          coordinatesRef = {coordinatesRef}/>
    </div>
  )
}
export default App;
