import React from 'react';
import PropTypes from 'prop-types';

class Review extends React.Component {
  render() {
    const { email, comment, rating } = this.props;
    return (
      <div>
        <p>{email}</p>
        <p>{comment}</p>
        <p>{rating}</p>
      </div>
    );
  }
}

Review.propTypes = {
  email: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
}

export default Review;
