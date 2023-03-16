import { useMemo } from 'react';
import Nav from './Nav';
import { bugger } from '../../assets/icons/buggerIcon';

 function Header() {

  return (
    <header className='flex flex-col px-3 py-2 dark:bg-slate-800 text-white'>
      <div className='flex justify-between'>
        <h1 className='text-2xl'>Kids|Prog</h1>

        <div className=''>
          { bugger() }
        </div>
      </div>

        <div className='self-center'>
          <Nav />
        </div>
    </header>
  );
}

export default Header;
