import Button from './Button.jsx';

function ProductCard({ title, price, category, thumbnail }) {
  return (
    <article className="tarjeta-producto">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{category}</p>
      <p>${price}</p>
      <Button>Ver producto</Button>
    </article>
  );
}

export default ProductCard;
