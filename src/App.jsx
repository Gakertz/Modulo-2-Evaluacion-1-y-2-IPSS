import { useState } from 'react'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import ProductCard from './components/ProductCard.jsx';
import { productos } from './data/products.js';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    const [busqueda, setBusqueda] = useState('');

    const productosFiltrados = productos.filter((producto) =>
    producto.name.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.category.toLowerCase().includes(busqueda.toLowerCase())
  );
    return (
    <>
      <Header />
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      <ProductList productos={productosFiltrados} />
      <Footer />
    </>
  );
}
export default App
