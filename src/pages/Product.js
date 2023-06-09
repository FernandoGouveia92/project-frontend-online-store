/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getSpecificProduct } from '../services/api';
import Review from '../Components/Review';
import HomeButton from '../Components/HomeButton';
import {
  ProductDetailContainer,
  Container,
  ProductImg,
  ProductSection,
  AddToCartButton,
  ProductDetailTopPage,
  ProductSectionFormReview,
  AddReviewButton,
  ProductSectionForm,
  FormTextarea,
  ReviewEmail,
  ReviewScore,
  ProductFormTitle } from '../styles/ProductDetail/styles';

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      productInfo: {},
      email: '',
      rating: '1',
      comment: '',
      productId: '',
      reviews: [],
      shipp: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getProduct();
    const savedReviews = JSON.parse(localStorage.getItem('reviews'));
    if (!savedReviews) {
      this.setState({
        reviews: [],
        productId: id,
      });
    } else {
      this.setState({
        reviews: savedReviews,
        productId: id,
      });
    }
  }

  componentDidUpdate() {
    const { reviews } = this.state;
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getSpecificProduct(id);
    this.setState({
      productInfo: product,
      shipp: product.shipping.free_shipping,
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  createReview = () => {
    const { email, rating, comment, productId } = this.state;
    const productRev = {
      email,
      rating,
      comment,
      productId,
    };

    this.setState((prev) => ({
      reviews: [...prev.reviews, productRev],
      email: '',
      rating: '1',
      comment: '',
    }));
  }

  render() {
    const { productInfo: proIn, email, comment, reviews, productId, shipp } = this.state;
    const { addToCart, match: { params: { id } }, amount } = this.props;

    return (
      <Container data-testid="product">
        <ProductDetailTopPage>
          <HomeButton />
          <Link
            className="css-shoppingcart"
            to="/ShoppingCart"
            type="button"
            data-testid="shopping-cart-button"
          >
            <FontAwesomeIcon icon={ faCartShopping } />
            <strong>Meu Carrinho</strong>
            <strong data-testid="shopping-cart-size">{ amount }</strong>
          </Link>
        </ProductDetailTopPage>
        <ProductDetailContainer>
          <ProductSection>
            <h2 data-testid="product-detail-name">{ proIn.title }</h2>
            <h2>{ proIn.price }</h2>
          </ProductSection>
          <ProductImg src={ proIn.thumbnail } alt={ proIn.title } />
          {
            shipp && <div data-testid="free-shipping">Frete Grátis</div>
          }
          <div>
            <AddToCartButton
              type="button"
              onClick={ () => addToCart('', proIn.price, proIn.title, proIn.thumbnail) }
              data-testid="product-detail-add-to-cart"
            >
              Adiciona ao Carrinho
            </AddToCartButton>
          </div>
        </ProductDetailContainer>
        <ProductSectionForm>
          <ProductSectionFormReview>
            <ProductFormTitle>O que achou desse produto?</ProductFormTitle>
            <ReviewEmail htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                data-testid="product-detail-email"
                value={ email }
                onChange={ this.handleChange }
                placeholder="Insira seu email"
              />
            </ReviewEmail>
            <p>Qual score você dá para esse produto?</p>
            <ReviewScore onChange={ this.handleChange } name="rating">
              <option value="1" data-testid="1-rating">1</option>
              <option value="2" data-testid="2-rating">2</option>
              <option value="3" data-testid="3-rating">3</option>
              <option value="4" data-testid="4-rating">4</option>
              <option value="5" data-testid="5-rating">5</option>
            </ReviewScore>
            <FormTextarea
              placeholder="Escreva o que achou do produto aqui!"
              value={ comment }
              name="comment"
              row="30"
              collumns="30"
              data-testid="product-detail-evaluation"
              onChange={ this.handleChange }
            />
            <AddReviewButton
              type="button"
              onClick={ () => this.createReview(productId) }
              data-testid="submit-review-btn"
            >
              Submeter Review
            </AddReviewButton>
          </ProductSectionFormReview>
          <ProductFormTitle>Reviews</ProductFormTitle>
          {
            reviews
              .filter(({ productId: getId }) => getId === id)
              .map(({ email: em, comment: com, rating: rat }, index) => (
                <Review
                  key={ `${em}-${index}` }
                  email={ em }
                  comment={ com }
                  rating={ rat }
                />
              ))
          }
        </ProductSectionForm>
      </Container>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Product;
