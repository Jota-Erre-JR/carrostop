import './styles4.css';

const SearchButton = () => {
  return (
    <>
      <div className="search-container">
        <div className="form-outline">
          <input type="search" placeholder="Digite sua busca" aria-label="Digite sua busca" className="search-form"/>
        </div>
        <div className="search-button">
        <button type="button" className="btn btn-search">
          <p>BUSCAR</p>
        </button>
        </div>
      </div>
    </>
  );
};

export default SearchButton;
