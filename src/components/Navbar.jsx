import React from 'react';
import '../styles/Navbar.css';

function Navbar(props) {
    return (
        <nav>  
            <button onClick={() => props.setPage('home')}> Home </button>
            <button onClick={() => props.setPage('work')}> Work </button>
        </nav>      
    );
}
  
export default Navbar;