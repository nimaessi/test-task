
const Dots = ({coord}) => {
  return (
    <div
        style={{
            position: 'absolute',
            left: coord.x,
            top: coord.y,
            width: '5px',
            height: '5px',
            backgroundColor: 'red',
            borderRadius: '50%',}}>
    </div>
  )
}

export default Dots;