import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';

const PageFooter = () => (
  <div className="container">
    <footer className="text-center">
      <a className="up-arrow" href="#home" data-toggle="tooltip" title="TO TOP">
        <span className="glyphicon glyphicon-chevron-up" />
      </a><br /><br />
      <Panel>
        <p class="small">
          <span>
            <i class="glyphicon glyphicon-map-marker" />
            {' '}
            Av. Fernández Peña, centro comercial trapiche local 04. Ejido, estado Mérida
          </span>
          {' '}
          <br />
          <span>☎ <a href="tel:+58 (274) 2458471">+58 (274) 2458471</a></span>
          <br />
          <span>
            <i class="glyphicon glyphicon-envelope" />
            {' '}
            <a href="mailto:dpizza.merida@gmail.com">dpizza.merida@gmail.com</a>
          </span>
        </p>
      </Panel>
    </footer>
  </div>
);

export default PageFooter;
