import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';

const PageFooter = () => (
  <div className="container">
    <footer className="text-center">
      <a className="up-arrow" href="#home" data-toggle="tooltip" title="TO TOP">
        <span className="glyphicon glyphicon-chevron-up" />
      </a><br /><br />
      <Panel className="footer-layout">
        <p className="small">
          <span>
            <a
              href="https://www.google.com/maps/place/Restaurant+D+PIZZA/@8.5719975,-71.2600409,12z/data=!4m8!1m2!2m1!1sD'Pizza+Ejido+Merida!3m4!1s0x0:0x84e5c4d011958208!8m2!3d8.5498515!4d-71.2359953"
              title="Ver dirección"
            >
              <i className="glyphicon glyphicon-map-marker" />
              {' '}
              Av. Fernández Peña, centro comercial trapiche local 04. Ejido, estado Mérida
            </a>
          </span>
          {' '}
          <br />
          <span>☎ <a href="tel:+58 (274) 2458471">+58 (274) 2458471</a></span>
          <br />
          <span>
            <i className="glyphicon glyphicon-envelope" />
            {' '}
            <a href="mailto:dpizza.merida@gmail.com">dpizza.merida@gmail.com</a>
          </span>
        </p>
      </Panel>
    </footer>
  </div>
);

export default PageFooter;
