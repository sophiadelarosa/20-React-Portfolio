import React from 'react';
import '../styles/Navbar.css';

function Navbar(props) {
    return (
        <nav>  
            <button onClick={() => props.setPage('home')}> Home </button>
            <button onClick={() => props.setPage('work')}> Portfolio </button>
            <button onClick={() => props.setPage('resume')}> Resume </button>
            <button onClick={() => props.setPage('Contact')}> Contact </button>
        </nav>      
    );
}
  
export default Navbar;