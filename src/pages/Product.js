import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getSpecificProduct } from '../services/api';
import Review from '../Components/Review';

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      productInfo: {},
      email: '',
      rating: '1',
      comment: '',
      productName: '',
      reviews: [],
    };
  }

  componentDidMount() {
    this.getProduct();
    const savedReviews = JSON.parse(localStorage.getItem('reviews'));
    if (!savedReviews) {
      this.setState({
        reviews: []
      })
    } else {
      this.setState({
        reviews: savedReviews,
      })
    }
    
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getSpecificProduct(id);
    this.setState({
      productInfo: product,
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }

  createReview = () => {
    const { email, rating, comment } = this.state;
    const productRev = {
      email,
      rating,
      comment,
    };

    this.setState((prev) => ({
      reviews: [...prev.reviews, productRev],
      email: '',
      rating: '1',
      comment: '',
    }));
  }

  componentDidUpdate() {
    const { reviews } = this.state;
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }

  render() {
    const { productInfo, email, comment, reviews } = this.state;
    const { title, price, thumbnail } = productInfo;
    const { addToCart } = this.props;

    return (
      <div data-testid="product">
        <Link
          className="css-shoppingcart"
          to="/ShoppingCart"
          type="button"
          data-testid="shopping-cart-button"
        >
          <FontAwesomeIcon icon={ faCartShopping } />
          <strong>Meu Carrinho</strong>
        </Link>
        <section>
          <h2 data-testid="product-detail-name">{ title }</h2>
          <h2>{ price }</h2>
        </section>
        <img src={ thumbnail } alt={ title } />
        <div>
          <button
            type="button"
            onClick={ () => addToCart(price, title, thumbnail) }
            data-testid="product-detail-add-to-cart"
          >
            Adiciona ao Carrinho
          </button>
        </div>
        <section>
          <form>
            <label htmlFor='email'>
              Email:
              <input
                type="email"
                id="email"
                name="email"
                data-testid="product-detail-email"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
            <select onChange={ this.handleChange } name="rating">
              <option value={ '1' } data-testid={ '1-rating' }>1</option>
              <option value={ '2' } data-testid={ '2-rating' }>2</option>
              <option value={ '3' } data-testid={ '3-rating' }>3</option>
              <option value={ '4' } data-testid={ '4-rating' }>4</option>
              <option value={ '5' } data-testid={ '5-rating' }>5</option>
            </select>
            <label>
              <textarea
                value={ comment }
                name="comment"
                row="30"
                collumns="30"
                data-testid="product-detail-evaluation"
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              onClick={ this.createReview }
              data-testid="submit-review-btn"
            >
              botão
            </button> 
          </form>
            {
              reviews/* .filter(({  })) */.map(({ email, comment, rating }, index) => <Review key={ `${email}-${index}` } email={ email } comment={ comment } rating={ rating } />
              )
            }
        </section>
      </div>
    );
  }
}

/* {
              [1, 2, 3, 4, 5].map((rating) => (
                <option value={ rating } data-testid={ `${rating}-rating` } name="rating" onChange={ this.handleChange }>{ rating }</option>
              ))
            } */

/* <label htmlFor={ rating } >
  { rating }
  <input type="radio" name="rating" value={ rating } id={ rating } data-testid={ `` } />
</label> */

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
