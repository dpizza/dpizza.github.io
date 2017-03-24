import React from 'react';
import Pizzas from './Pizzas';
import Menu from './Menu';

const MenuSelection = ({selection}) => {
  switch (selection) {
    case 'menu':
      return <Menu />;
    default:
      return <Pizzas />;
  }
};

MenuSelection.propTypes = {
  selection: React.PropTypes.string,
};

export default MenuSelection;
