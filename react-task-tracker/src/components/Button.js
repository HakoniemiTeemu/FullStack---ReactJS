// Left the proptypes out of this assignment as they are
// not working anymore in React 19 as intented.


const Button = ({ color = 'steelblue', text }) => {
  console.log(text)

  return (
    <button style={{ backgroundColor: color }} className='btn'>
      {text}
    </button>
  )
}



export default Button
