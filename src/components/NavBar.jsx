import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';
import logoMusic from '../assets/img/logoMusic.png';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logoMusic} alt="Logo" className="navbar-logo-img" />
                    <h1>Music Store</h1>
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/category/musica">Música</Link></li>
                <li><Link to="/category/albumes">Álbumes</Link></li>
                <li><Link to="/category/merchandising">Merchandising</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;