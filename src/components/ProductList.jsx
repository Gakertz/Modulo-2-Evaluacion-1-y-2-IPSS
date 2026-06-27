import ProductCard from './ProductCard.jsx';

function ProductList({ productos }) {
  return (
    <section className="lista-productos">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          title={producto.title}
          price={producto.price}
          category={producto.category}
          thumbnail={producto.thumbnail}
        />
      ))}
    </section>
  );
}

export default ProductList;
