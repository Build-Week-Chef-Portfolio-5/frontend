import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  id: Date.now(),
  name: "",
  image_url: "",
  title: "",
  meal_type: "",
  ingredients: "",
  instructions: "",
  chef_id: ""
};

const AddRecipe = props => {
  const [addRecipe, setAddRecipe] = useState(initialState);

  const handleChange = e => {
    e.preventDefault();
    setAddRecipe({ ...addRecipe, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    const {
      image_url,
      title,
      meal_type,
      ingredients,
      instructions
    } = addRecipe;
    axiosWithAuth()
      .post(`/${props.chefId || localStorage.getItem("id")}/posts`, {
        image_url,
        title,
        meal_type,
        ingredients,
        instructions
      })
      .then(res => {
        console.log(res.data);
        setAddRecipe(res.data);
      })
      .catch(err => console.log("sorry, can not add a new recipe", err));
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add Recipe</h3>
      <input
        type="text"
        name="image_url"
        value={addRecipe.image_url}
        placeholder="Image URL"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="title"
        value={addRecipe.title}
        placeholder="Title"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="meal_type"
        value={addRecipe.meal_type}
        placeholder="Meal Type"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="ingredients"
        value={addRecipe.ingredients}
        placeholder="Ingredients"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="instructions"
        value={addRecipe.instructions}
        placeholder="Instructions"
        onChange={handleChange}
        required
      />

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;
