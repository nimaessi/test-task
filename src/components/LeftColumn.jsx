import { showLog } from "../utils/showLog";

const LeftColumn = ({coordinatesRef,startNew,animateArrow }) => {

  const handleAnimate = () => {
    if (coordinatesRef.current.length > 1) {
      const firstCoord = coordinatesRef.current[0];
      const lastCoord = coordinatesRef.current[coordinatesRef.current.length - 1];
      animateArrow(firstCoord, lastCoord);
    }
  };

  return (
    <div className="column left-column">
      <div className="button-container">
        <button className="btn" onClick={startNew}>Start new</button>
        <button className="btn" onClick = {() => showLog(coordinatesRef.current)}>Show location log</button>
        <button className="btn" onClick={handleAnimate}>Show last route</button>
      </div>
    </div>
  )
}

export default LeftColumn