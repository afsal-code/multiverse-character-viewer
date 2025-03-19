import './Navbar.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="nav-logo">Rick & Morty</div>
        <ul className="nav-links">
          <li>  <Link to="/">Home</Link> </li>
          <li><a href="#">Characters</a></li>
          <li><a href="#">Episodes</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  