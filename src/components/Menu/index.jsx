import React from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import ProductList from 'components/ProductList';
import data from './data.json';

const Menu = () => {
  return (
    <div id="pastas" className="container">
      <PageHeader>
        <div className="menu-header">
          Pastas <br />
        </div>
      </PageHeader>
      <ProductList products={data.pastas}  />
    </div>
  );
};

export default Menu;