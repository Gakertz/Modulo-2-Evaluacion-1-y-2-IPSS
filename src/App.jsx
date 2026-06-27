import { useEffect,useState } from 'react'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import ProductCard from './components/ProductCard.jsx';
import { productos } from './data/products.js';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';
import Loader from './components/Loader.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const API_PRODUCTOS = 'https://dummyjson.com/products';
function App() {
  const [busqueda, setBusqueda] = useState('');
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    async function obtenerProductos() {
      try {
        setLoading(true);
        setError('');
        const respuesta = await fetch(API_PRODUCTOS);
      if (!respuesta.ok) {
          throw new Error('La API no respondió correctamente.');
        }
        const data = await respuesta.json();
        setProductos(data.products);
        } 
        catch (error) {
          setError(error.message || 'No se pudieron cargar los productos.');
        } 
        finally {
          setLoading(false);
        }
    }
    obtenerProductos();
  }, []);

    const textoBusqueda = busqueda.trim().toLowerCase();
    const productosFiltrados = productos.filter((producto) => {
    const nombre = producto.title.toLowerCase();
    const categoria = producto.category.toLowerCase();
    return nombre.includes(textoBusqueda) || categoria.includes(textoBusqueda);
  });

  return (
    <>
      <Header />
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      {loading && <Loader />}
      {error && <ErrorMessage mensaje={error} />}
      {!loading && !error && <ProductList productos={productosFiltrados} />}
      <Footer />
    </>
  );
}
export default App
