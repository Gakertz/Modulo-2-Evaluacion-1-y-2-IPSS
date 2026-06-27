function ErrorMessage({ mensaje }) {
  return (
    <div className="mensaje-error" role="alert">
      <strong>Error al cargar productos</strong>
      <p>{mensaje}</p>
    </div>
  );
}
export default ErrorMessage;
