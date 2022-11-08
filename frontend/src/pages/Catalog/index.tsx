import SearchButton from 'components/SearchButton';
import ProductCard from 'components/ProductCard';
import './styles5.css';

const Catalog = () => {
  return (
    <>
    <div className="catalog-search">
    <SearchButton />
    </div>
      <div className="container-fluid main-container">
        <div className="row">
          <div className="mx-auto col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="mx-auto col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="mx-auto col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="mx-auto col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="mx-auto col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="mx-auto col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
