function Loader() {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="spinner"></div>
      <p>Cargando productos desde la API...</p>
    </div>
  );
}
export default Loader;
