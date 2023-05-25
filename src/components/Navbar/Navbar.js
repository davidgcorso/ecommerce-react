import "./Navbar.css"
import logo from "../../img/logo.png"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='navbar'>
        <nav className='navbar__sections'>
        <Link to={"/"}><img className='navbar__logo'src={logo} alt="ecomsur logo"/></Link>
        <Link className='navbar__cartIcon' to={"/cart"}><span>0</span>🛒</Link>
        </nav>

    </div>
  )
}

export default Navbar