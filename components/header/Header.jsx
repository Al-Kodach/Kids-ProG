import { context } from "../../hooks/useContext";
import { useContext } from "react";
import BuggerMenu from './buggerBtn';
import Nav from './Nav';

export default function Header() {
const {isMenuOpen} = useContext(context)

  return (
    <header className='flex flex-col px-2 py-4'>
      <div className='flex justify-between'>
        <h1 className='text-2xl uppercase '>Al-Kodach</h1>
        <BuggerMenu />
      </div>
      <div className={`md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Nav />
      </div>
    </header>
  );
}
