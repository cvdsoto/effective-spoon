import React, {useState} from 'react';
import Header from '../components/Header';
import {navigate} from 'gatsby';

export default () => {
  const [ingredients, setIngredients] = useState('');

  const _handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/results`, {state: {ingredients}});
  }

  return (
  <div>
    <Header headerText="Search for a Recipe" />
    <form onSubmit={_handleSubmit}>
      <label>
        Ingredients:
        <input type="search"
                value={ingredients}
                onChange={event => setIngredients(event.target.value)}/>
      </label>
      <label>
        <input type="checkbox" /> Balanced
      </label>

      <input type="submit" value="Search" />
    </form>
  </div>
  )
}
