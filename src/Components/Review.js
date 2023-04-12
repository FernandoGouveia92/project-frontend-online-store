import React from 'react';
import PropTypes from 'prop-types';
import { ReviewContainer } from '../styles/Review/styles';

class Review extends React.Component {
  render() {
    const { email, comment, rating } = this.props;
    return (
      <ReviewContainer>
        <p>
          <strong>Cliente:</strong>
          {email}
        </p>
        <p>
          <strong>Opinião:</strong>
          {comment}
        </p>
        <p>
          <strong>Score:</strong>
          <span />
          {rating}
        </p>
      </ReviewContainer>
    );
  }
}

Review.propTypes = {
  email: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default Review;
