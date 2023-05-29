import "./Navbar.css"
import logo from "../../img/logo.png"
import { Link } from "react-router-dom"
import TotalItems from "../CartContent/TotalItems"
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Navbar = () => {
  const { cart } = useContext(dataContext)
  return (
    <div className='navbar'>
        <nav className='navbar__sections'>
        <Link to={"/"}><img className='navbar__logo'src={logo} alt="ecomsur logo"/></Link>
        <Link className='navbar__cartIcon' to={"/cart"}>{cart.length > 0 ? <TotalItems /> : null}🛒</Link>
        </nav>

    </div>
  )
}

export default Navbar