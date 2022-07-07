import React from 'react';
import { getCategories } from '../services/api';
import CategoriesCard from '../components/CategoriesCard';

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
      <div>
        {
          array.map(({ id, name }, index) => (<CategoriesCard
            key={ index }
            id={ id }
            nomeCategoria={ name }
          />))
        }
      </div>
    );
  }
}

export default Categories;
