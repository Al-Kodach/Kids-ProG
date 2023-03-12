import { Link } from "react-router-dom";
import { useContext } from "react";
import { context } from "../../hooks/useContext";

export default function Nav() {
  const {isMenuOpen, toggleMenu} = useContext(context);

  return (
    <nav className={`md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className='flex flex-col items-center justify-space-around'>
            <span className="navLink">
              <Link to='/'>Home</Link>
            </span>

            <span className="navLink">
              <Link to='about'>About</Link>
            </span>

            <span className="navLink">
              <Link to='blog'>Blog</Link>
            </span>

            <span className="navLink">
              <Link to='contacts'>Contacts</Link>
            </span>
        </div>
    </nav>
    )
}
