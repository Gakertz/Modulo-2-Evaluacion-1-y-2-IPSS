import Button from './Button.jsx';

function ProductCard({ name, price, category, image }) {
  return (
    <article className="tarjeta-producto">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{category}</p>
      <p>${price}</p>
      <Button>Ver producto</Button>
    </article>
  );
}

export default ProductCard;
