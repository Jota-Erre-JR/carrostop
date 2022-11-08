import './styles3.css';
import ProductImg from 'assets/images/product.png';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do Produto" />
      </div>
      <div className="card-bottom-container">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <div className="btn-container">
          <button type="button" className="btn btn-buy">
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
