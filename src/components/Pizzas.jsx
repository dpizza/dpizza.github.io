import React from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import ProductList from './ProductList';

const pizzasMenu = [
  {
    id: 1,
    image: 
    { 
      src: 'http://placehold.it/1200x600'
    },
    name: 'Napolitana',
    description: 'Queso, salsa y anchoa',
    offers: [
      {
        name: 'Normal',
        price: 'Bs. 4.500,00'
      },
      {
        name: 'Mediana',
        price: 'Bs. 5.920,00'
      },
      {
        name: 'Familiar',
        price: 'Bs. 8.290,00'
      },
      {
        name: 'Extra Familiar',
        price: 'Bs. 10.090,00'
      }
    ]
  }
];

const Pizzas = () => {
  return (
    <div id="pizzas" className="container">
      <PageHeader>
        {' '}<div className="menu-header">
          Pizzas <br />
        </div>
      </PageHeader>
      <ProductList products={pizzasMenu} />
    </div>
  );
};

export default Pizzas;
