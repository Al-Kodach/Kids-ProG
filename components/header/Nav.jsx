import { Link } from "react-router-dom";

export default function Nav() {
  return (
      <nav className='self-center bg-gray-100 w-screen mt-4'>
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
