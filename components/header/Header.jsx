import Nav from './Nav';
import { bugger } from '../../assets/icons/buggerIcon';

export default function Header() {

console.log(bugger())
  return (
    <header className='flex flex-col px-2 py-4'>
        <h1 className='text-2xl uppercase '>Al-Kodach</h1>
        { bugger() }
        <Nav />
    </header>
  );
}
