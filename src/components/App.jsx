import React from 'react';

import Menu from './Menu';
import Carousel from './Carousel';
import Footer from './Footer';
import Order from './Order';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showOrder: false,
    };
  }

  openOrder() {
      this.setState({ showOrder: true });
  }

  closeOrder() {
      this.setState({ showOrder: false });
  }

  render() {
    return (
      <div>
        <Menu openOrder={this.openOrder.bind(this)} />
        <Carousel />
        <Order showModal={this.state.showOrder} closeModal={this.closeOrder.bind(this)} />
        <Footer />
      </div>
    );
  }
}

export default App;
