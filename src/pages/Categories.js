import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.setCategories();
  }

  setCategories = async () => {
    const categorias = await getCategories();
    this.setState({ array: categorias });
  }

  render() {
    const { array } = this.state;
    const { handleChange } = this.props;
    return (
      <ul className="css-categories">
        {
          array.map(({ id, name }, index) => (
            <li key={ index }>
              <label htmlFor={ id } data-testid="category">
                <button
                  type="button"
                  name="categoryName"
                  id={ id }
                  value={ id }
                  onClick={ handleChange }
                >
                  { name }
                </button>
              </label>
            </li>
          ))
        }
      </ul>
    );
  }
}

Categories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Categories;
