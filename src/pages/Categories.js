import React from 'react';
import { getCategories } from '../services/api';
import CategoriesCard from '../Components/CategoriesCard';

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
    return (
      <ul className="css-categories">
        {
          array.map(({ id, name }, index) => (<CategoriesCard
            key={ index }
            id={ id }
            nomeCategoria={ name }
          />))
        }
      </ul>
    );
  }
}

export default Categories;
