import React from 'react';

import WebsiteMenu from './WebsiteMenu';
import Footer from './Footer';
import Order from './Order';
import Schedule from './Schedule';
import MenuSelection from './MenuSelection';

const ORDER = 'ORDER';
const SCHEDULE = 'SCHEDULE';

// TODO: use flowtype

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      showOrder: false,
      showSchedule: false,
    };
  }

  changeModalWindowState(modal, state) {
    switch (modal) {
      case ORDER:
        return this.setState({showOrder: state});
      case SCHEDULE:
        return this.setState({showSchedule: state});
      default:
        return;
    }
  }

  open(modal) {
    this.changeModalWindowState(modal, true);
  }

  close(modal) {
    this.changeModalWindowState(modal, false);
  }

  render() {
    let selection = this.props.match.params.selection;
    let openModalWindowsFunc = {
      order: this.open.bind(this, ORDER),
      schedule: this.open.bind(this, SCHEDULE),
    };
    return (
      <div>
        <WebsiteMenu openModalWindowsFunc={openModalWindowsFunc} selection={selection} />
        <Order
          showModal={this.state.showOrder}
          closeModal={this.close.bind(this, ORDER)}
        />
        <Schedule
          showModal={this.state.showSchedule}
          closeModal={this.close.bind(this, SCHEDULE)}
        />
        <MenuSelection selection={selection} />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
