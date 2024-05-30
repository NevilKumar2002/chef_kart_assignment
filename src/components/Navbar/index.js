import { Link } from 'react-router-dom'
import './style.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Navbar = () => {
  return (
    <div id="navbar">
        <button id='back-button'>
            <Link to="/">
          
            <ArrowBackIosNewIcon />

            </Link>
        </button>
        <p className='navbar-heading'>Select Dishes</p>
    </div>
  )
}
export default Navbar;
