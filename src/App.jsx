import { useState } from 'react'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    return (
    <>
      <Header />
      <Button>test de botón</Button>
      <Footer />
    </>
  );
}
export default App
