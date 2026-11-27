import Button from './Button'


const Header = ({ title = 'Task Tracker' }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add'/>
    </header>
  )
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header
