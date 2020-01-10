import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const TextInput = styled.input`
  margin: 1% 1%;
  height: 40px;
  width: 15%;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0 2%;
  border: 2px solid lightgrey;
`;

const ButtonStyle = styled.button`
  width: 15%;
  height: 45px;
  margin: auto;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  background: #ffb284;
  color: #fff;
  margin-top: 1%;
  font: 15px Poppins, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

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
      .catch(err =>
        console.log("sorry, can not add a new recipe", err.response)
      );
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        type="text"
        name="image_url"
        value={addRecipe.image_url}
        placeholder="Image URL"
        onChange={handleChange}
        required
      />
      <TextInput
        type="text"
        name="title"
        value={addRecipe.title}
        placeholder="Title"
        onChange={handleChange}
        required
      />

      <TextInput
        type="text"
        name="meal_type"
        value={addRecipe.meal_type}
        placeholder="Meal Type"
        onChange={handleChange}
        required
      />

      <TextInput
        type="text"
        name="ingredients"
        value={addRecipe.ingredients}
        placeholder="Ingredients"
        onChange={handleChange}
        required
      />

      <TextInput
        type="text"
        name="instructions"
        value={addRecipe.instructions}
        placeholder="Instructions"
        onChange={handleChange}
        required
      />

      <ButtonStyle type="submit">Add Recipe</ButtonStyle>
    </form>
  );
};

export default AddRecipe;
