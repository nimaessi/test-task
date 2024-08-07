import { showLog } from "../utils/showLog";

const LeftColumn = ({coordinatesRef,startNew,animateColors }) => {

  return (
    <div className="column left-column">
      <div className="button-container">
        <button className="btn" onClick={startNew}>Start new</button>
        <button className="btn" onClick = {() => showLog(coordinatesRef.current)}>Show location log</button>
        <button className="btn" onClick={animateColors}>Show last route</button>
      </div>
    </div>
  )
}

export default LeftColumn