import logo from "../images/ANF.webp"
import {Link, NavLink} from 'react-router-dom'
import Canvas from "./Canvas";

export default function Header(){
    return( 
      <div className="header">
        <nav className='nav'> 
          <img className="logo" src={logo} />
          <div className="titleHeader">La cabane d'Inu</div>
          <ul className="nav-items">
            <li> <NavLink to="/" className="navlink"> Home </NavLink></li>
            <li> <NavLink to="/algorithms" className="navlink"> Algorithms </NavLink> </li>
          </ul>
        </nav>
      </div>
    );
  }