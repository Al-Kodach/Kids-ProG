import { useContext } from "react";
import { context } from "../../hooks/useContext";
import { Link } from "react-router-dom";

export default function Nav() {
  const {isMenuOpen, toggleMenu} = useContext(context);

  return (
    <nav className={`md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
            <span className="navLink">
              <Link to='/'>Home</Link>
            </span>

            <span className="navLink">
              <Link to='about'>About</Link>
            </span>

            <span className="navLink">
              <Link to='learn'>Learn</Link>
            </span>

            <span className="navLink">
              <Link to='contacts'>Contacts</Link>
            </span>

    </nav>
    )
}
