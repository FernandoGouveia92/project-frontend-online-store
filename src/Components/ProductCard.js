import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const {
      image,
      title,
      price,
      id,
    } = this.props;

    return (
      <div className="css-product-card" data-testid="product">
        <img src={ image } alt={ title } />
        <p>{ title }</p>
        <p>{ price }</p>
        <Link
          to={ `/product/${id}` }
          data-testid="product-detail-link"
        >
          Página do produto
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
