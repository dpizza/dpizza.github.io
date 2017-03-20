import React from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';

const getOffers = offers => {
  let OffersHtmlValue = [];
  let offer = {}, offer2 = offer;
  let index = 0;

  while (offers && offers.length > 0) {
    offer = offers.shift();
    offer2 = offers.shift();

    if (OffersHtmlValue.length > 0) {
      OffersHtmlValue.push(<hr key={index++} />);
    }
  
    OffersHtmlValue.push(
      <Row key={index++}>
        <Col md={5}>
          <Button bsStyle="warning" bsSize="xsmall">
            +
          </Button>
          <span> {offer.name} <small>({offer.price})</small></span>
        </Col>
        {offer2
          ? <Col md={7}>
              <Button bsStyle="warning" bsSize="xsmall">
                +
              </Button>
              <span> {offer2.name} <small>({offer2.price})</small></span>
            </Col>
          : ''}
      </Row>
    );
  }

  return OffersHtmlValue;
};

const ProductList = ({products}) => {
  return (
    <Grid bsClass='grid-layout'>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <Row>
              <Col md={2}>
                <a href="#" />
              </Col>
              <Col md={10}>
                <Row>
                  <Col md={3}>
                    <h4>{product.name}</h4>
                    <h5>{product.description}</h5>
                  </Col>
                  <Col id="menu-items" md={9}>
                    {getOffers([...product.offers])}
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr />
          </div>
        );
      })}
    </Grid>
  );
};

ProductList.propTypes = {
  products: React.PropTypes.array.isRequired,
};

export default ProductList;
