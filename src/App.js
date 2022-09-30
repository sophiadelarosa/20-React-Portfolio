import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useState } from 'react';
import Work from './components/Work';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [page, setPage] = useState('home');
  return (
    <div className="App">
      <Header />
      <Navbar setPage={setPage}/>
      { page === 'home' && <Home /> }
      { page === 'work' && <Work /> }
      { page === 'resume' && <Resume />}
      { page === 'Contact' && <Contact />}
      <Footer />
    </div>
  );
}



export default App;
