import React from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import ProductList from 'components/ProductList';
import data from './data.json';

const Menu = () => {
  return (
    <div>
      <div id="pastas" className="container">
        <PageHeader>
          <div className="menu-header">
            Pastas <br />
          </div>
        </PageHeader>
        <ProductList products={data.pastas} />
      </div>
      <div id="hamburguesas" className="container">
        <PageHeader>
          <div className="menu-header">
            Hamburguesas / Choripan / Shawarma<br />
          </div>
        </PageHeader>
        <ProductList products={data.hamburguesas} />
      </div>
      <div id="bebidas" className="container">
        <PageHeader>
          <div className="menu-header">
            Bebidas <br />
          </div>
        </PageHeader>
        <ProductList products={data.bebidas} />
      </div>
    </div>
  );
};

export default Menu;
