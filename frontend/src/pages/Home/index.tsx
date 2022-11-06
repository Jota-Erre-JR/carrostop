import Navbar from 'components/Navbar';
import { ReactComponent as MainImage } from 'assets/images/caryellow768.svg';
import './styles.css';
import ButtonIcon from 'components/Button';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-image-container">
            <MainImage />
          </div>
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="home-cta-navigation">
          <div>
            <ButtonIcon />
          </div>
          <div className="home-cta-txt">
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
