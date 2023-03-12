import { useContext } from "react";
import { context } from "../../hooks/useContext";

export default function bugger() {
  const {isMenuOpen, toggleMenu} = useContext(context);

  // if menu bar is false we return the bugger icon
  if(isMenuOpen) {
    return (
      <button onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    );
  }

// return close icon if isMenuOpen is true
  return (
    <button onClick={toggleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
}
