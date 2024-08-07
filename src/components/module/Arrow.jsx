const Arrow = ({arrowStyle}) => {
  return (
    <div
        style={{
            ...arrowStyle,
            position: 'absolute',
            height: '2px',
            backgroundColor: 'blue'
            }}>
    </div>
  )
}

export default Arrow;