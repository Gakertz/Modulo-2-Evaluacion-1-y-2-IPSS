import { useState } from 'react'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import ProductCard from './components/ProductCard.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    return (
    <>
      <Header />
      <ProductCard
          name={"consola"}
          price={3500}
          category={"Videojuegos"}
          image={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR-QmKB53w7EXE38zEP7TFnyWNUptfbyHTNMb4XQziIAKy3pNWOqVAuY7ynxjW8u_2aPJNkZ0lQdf4CAHxpoU7Ceo2S7_I3lZPL0MKB6U2pN5gz94cVUzRaH8RO"}
        />
      <Footer />
    </>
  );
}
export default App
