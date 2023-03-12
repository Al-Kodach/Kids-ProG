import { context } from "../../hooks/useContext";
import { useContext } from "react";
import bugger from "../../assets/icons/buggerIcon";
import Nav from './Nav';

export default function Header() {
const {isMenuOpen} = useContext(context)

  return (
    <header className='flex flex-col px-2 py-4'>
      <div className='flex justify-between'>
        <h1 className='text-2xl uppercase '>Al-Kodach</h1>
        {bugger}
      </div>
        <Nav />
    </header>
  );
}
