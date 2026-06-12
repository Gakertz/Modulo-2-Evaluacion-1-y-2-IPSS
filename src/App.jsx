import { useState } from 'react'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import ProductCard from './components/ProductCard.jsx';
import { productos } from './data/products.js';
import ProductList from './components/ProductList.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    return (
    <>
      <Header />
      <ProductList productos={productos} />
      <Footer />
    </>
  );
}
export default App
