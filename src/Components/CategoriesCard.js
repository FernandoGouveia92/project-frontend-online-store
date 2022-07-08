import React from 'react';
import PropTypes from 'prop-types';

class CategoriesCard extends React.Component {
  render() {
    const { nomeCategoria, id } = this.props;

    return (
      <label htmlFor={ id } data-testid="category">
        <li>
          <button type="button">{ nomeCategoria }</button>
        </li>
      </label>
    );
  }
}

CategoriesCard.propTypes = {
  nomeCategoria: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CategoriesCard;
