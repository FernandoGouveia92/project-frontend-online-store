import React from 'react';
import PropTypes from 'prop-types';
import { getSpecificProduct } from '../services/api';

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      productInfo: {},
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getSpecificProduct(id);
    this.setState({
      productInfo: product,
    });
  }

  render() {
    const { productInfo } = this.state;
    return (
      <div data-testid="product">
        <section>
          <h2 data-testid="product-detail-name">{ productInfo.title }</h2>
          <h2>{ productInfo.price }</h2>
        </section>
        <img src={ productInfo.thumbnail } alt={ productInfo.title } />
        {/* <p>{ productInfo.productDescription }</p> */}
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Product;
