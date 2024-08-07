
const Dots = ({coord}) => {
  return (
    <div
        style={{
            position: 'absolute',
            left: coord.x,
            top: coord.y,
            width: '5px',
            height: '5px',
            backgroundColor: coord.color,
            borderRadius: '50%',}}>
    </div>
  )
}

export default Dots;