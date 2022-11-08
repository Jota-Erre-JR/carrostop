import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products">
            <Catalog />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
