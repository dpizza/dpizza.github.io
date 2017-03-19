import React from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import NavItem from 'react-bootstrap/lib/NavItem';

const Pizzas = () => {
  return (
    <div id="pizzas" className="container">
      <PageHeader>
        {' '}<div className="menu-header">
          Pizzas <br />
        </div>
      </PageHeader>
      <Row>
        <Col md={2}>
          <a href="#">
            <img
              className="img-responsive"
              src="http://placehold.it/200x150"
              alt=""
            />
          </a>
        </Col>
        <Col md={10}>
          <Row>
            <Col md={3}>
              <h4>Napolitana</h4>
              <h5>Queso, salsa y anchoa</h5>
            </Col>
            <Col id="menu-items" md={9}>
              <Row>
                <Col md={5}>
                    <Button bsStyle="warning" bsSize="xsmall">
                      +
                    </Button>
                    <span> Normal <small>(Bs. 4.500,00)</small></span>
                </Col>
                <Col md={7} >
                    <Button bsStyle="warning" bsSize="xsmall">
                      +
                    </Button>
                    <span> Mediana <small>(Bs. 5.920,00)</small></span>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md={5}>
                    <Button bsStyle="warning" bsSize="xsmall">
                      +
                    </Button>
                    <span> Familiar <small>(Bs. 8.290,00)</small></span>
                </Col>
                <Col md={5}>
                    <Button bsStyle="warning" bsSize="xsmall">
                      +
                    </Button>
                    <span> Extra Familiar <small>(Bs. 10.090,00)</small></span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default Pizzas;
