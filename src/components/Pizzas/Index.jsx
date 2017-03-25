import React from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import Carousel from 'components/Carousel';

import ProductList from 'components/ProductList';
import data from './data.json';

const Pizzas = () => {
  return (
    <div>
      <Carousel />
      <div id="pizzas" className="container">
        <PageHeader>
          {' '}<div className="menu-header">
            Pizzas <br />
          </div>
        </PageHeader>
        <ProductList products={data.pizzas} />
        <PageHeader>
          <div className="menu-header">Haga su Pizza</div>
        </PageHeader>
        <ProductList products={data.extras} />
      </div>
    </div>
  );
};

export default Pizzas;
