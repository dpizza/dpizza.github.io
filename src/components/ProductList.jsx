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
          <span>
            {' '}
            {offer.price}
            {' '}
            {offer.name ? <small>{offer.name}</small> : ''}
            {' '}
          </span>
        </Col>
        {offer2
          ? <Col md={7}>
              <Button bsStyle="warning" bsSize="xsmall">+</Button>
              <span> {offer2.price} <small>{offer2.name}</small></span>
            </Col>
          : ''}
      </Row>,
    );
  }

  return OffersHtmlValue;
};

const ProductList = ({products, containsImages}) => {
  let config = containsImages ? {col1: 3, col2: 9} : {col1: 0, col2: 12};
  return (
    <Grid bsClass="grid-layout">
      {products.map((product, index) => {
        return (
          <div key={index}>
            <Row>
              { containsImages && product.image
                ? <Col md={config.col1}>
                    <img src={product.image.src} />
                  </Col>
                : null}
              <Col md={config.col2}>
                <Row>
                  <Col md={5}>
                    <h4>{product.name}</h4>
                    {product.description
                      ? <span className="product-desc">
                          {product.description}
                        </span>
                      : ''}
                  </Col>
                  <Col id="menu-items" md={7}>
                    {getOffers([...product.offers])}
                  </Col>
                </Row>
              </Col>
            </Row>
            {index < products.length - 1 ? <hr /> : <br />}
          </div>
        );
      })}
    </Grid>
  );
};

ProductList.propTypes = {
  products: React.PropTypes.array.isRequired,
  containsImages: React.PropTypes.bool,
};

export default ProductList;
