import logo from "../images/ANF.webp"

export default function Header(){
    return( 
      <div className="header">
        <nav className='nav'> 
          <img className="logo" src={logo} />
          <div className="titleHeader">La cabane d'Inu</div>
          <ul className="nav-items">
            <li>Algorithms </li>
            <li>About me</li>
          </ul>
        </nav>
      </div>
    );
  }