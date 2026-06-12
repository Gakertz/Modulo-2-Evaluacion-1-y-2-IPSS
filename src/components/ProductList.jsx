import ProductCard from './ProductCard.jsx';

function ProductList({ productos }) {
  return (
    <section className="lista-productos">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          name={producto.name}
          price={producto.price}
          category={producto.category}
          image={producto.image}
        />
      ))}
    </section>
  );
}

export default ProductList;
