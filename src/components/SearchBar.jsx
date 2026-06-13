function SearchBar({ busqueda, setBusqueda }) {
  return (
    <div className="buscador">
      <label htmlFor="busqueda">Buscar productos: </label>
      <input
        id="busqueda"
        type="text"
        placeholder="Busca tus productos aqui"
        value={busqueda}
        onChange={(event) => setBusqueda(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
