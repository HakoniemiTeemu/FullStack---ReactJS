// Left the proptypes out of this assignment as they are
// not working anymore in React 19 as intented.


const Button = ({ color = 'steelblue', text }) => {
    const onClick = (e) => {
        console.log(e)
    }

  return (
    <button
    onClick={onClick} style={{
    backgroundColor: color }}
    className='btn'>
      {text}
    </button>
  )
}



export default Button
