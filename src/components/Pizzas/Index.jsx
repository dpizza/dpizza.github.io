import React from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';

import ProductList from 'components/ProductList';
import data from './data.json';

const Pizzas = () => {
  return (
    <div id="pizzas" className="container">
      <PageHeader>
        {' '}<div className="menu-header">
          Pizzas <br />
        </div>
      </PageHeader>
      <ProductList products={data} />
    </div>
  );
};

export default Pizzas;
