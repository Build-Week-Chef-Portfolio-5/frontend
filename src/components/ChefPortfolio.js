import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddRecipe from "./AddRecipe";
import NavBar from "./NavBar";
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
  width: 8%;
  height: 35px;
  margin: 5px;
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

const initialRecipe = {
  id: null,
  name: "",
  image_url: "",
  title: "",
  meal_type: "",
  ingredients: "",
  instructions: "",
  chef_id: ""
};

const ChefPortfolio = props => {
  const [posts, setPosts] = useState([]);
  const [edit, setEdit] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe);

  useEffect(() => {
    axiosWithAuth()
      .get(`/${props.chefId || localStorage.getItem("id")}/posts`)
      .then(res => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch(err =>
        console.log(
          "sorry, an error has occurred while fetching chef portfolio page",
          err
        )
      );
  }, []);

  const editRecipe = recipe => {
    setEdit(true);
    setRecipeToEdit(recipe);
  };

  const saveEdit = e => {
    e.preventDefault();
    const {
      image_url,
      title,
      meal_type,
      ingredients,
      instructions
    } = recipeToEdit;
    console.log({ image_url, title, meal_type, ingredients, instructions });
    axiosWithAuth()
      .put(`/posts/${recipeToEdit.id}`, {
        image_url,
        title,
        meal_type,
        ingredients,
        instructions
      })
      .then(res => {
        console.log(res);
        document.location.reload(true);
      })
      .catch(err => console.log("sorry, could not edit recipe", err.response));
  };

  const deleteRecipe = recipe => {
    axiosWithAuth()
      .delete(`/posts/${recipe.id}`, recipe)
      .then(res => {
        console.log(res);
        document.location.reload(true);
      })
      .catch(err =>
        console.log("sorry, could not delete recipe", err.response)
      );
  };

  return (
    <>
      <NavBar />
      <h1 className="title">
        Chef portfolio{" "}
        <span role="img" aria-label="chef">
          👨🏻‍🍳
        </span>
      </h1>
      <AddRecipe />
      <div>
        {posts.map(recipe => (
          <div key={recipe.id} className="recipes">
            <p className="recipe-input">Your Name: {recipe.name}</p>
            <p className="recipe-input">URL: {recipe.image_url}</p>
            <p className="recipe-input">Title: {recipe.title}</p>
            <p className="recipe-input">Meal Type: {recipe.meal_type}</p>
            <p className="recipe-input">Ingredients: {recipe.ingredients}</p>
            <p className="recipe-input">Instructions: {recipe.instructions}</p>
            <ButtonStyle onClick={() => editRecipe(recipe)}>Edit</ButtonStyle>
            <ButtonStyle onClick={() => deleteRecipe(recipe)}>
              Delete
            </ButtonStyle>
            <hr />
          </div>
        ))}

        {edit && (
          <form onSubmit={saveEdit}>
            <h3 className="edit-title">
              Edit Recipe{" "}
              <span role="img" aria-lable="downward pointing finger">
                👇
              </span>
            </h3>
            <TextInput
              onChange={e =>
                setRecipeToEdit({ ...recipeToEdit, image_url: e.target.value })
              }
              value={recipeToEdit.image_url}
            />

            <TextInput
              onChange={e =>
                setRecipeToEdit({ ...recipeToEdit, title: e.target.value })
              }
              value={recipeToEdit.title}
            />

            <TextInput
              onChange={e =>
                setRecipeToEdit({ ...recipeToEdit, meal_type: e.target.value })
              }
              value={recipeToEdit.meal_type}
            />

            <TextInput
              onChange={e =>
                setRecipeToEdit({
                  ...recipeToEdit,
                  ingredients: e.target.value
                })
              }
              value={recipeToEdit.ingredients}
            />

            <TextInput
              onChange={e =>
                setRecipeToEdit({
                  ...recipeToEdit,
                  instructions: e.target.value
                })
              }
              value={recipeToEdit.instructions}
            />
            <ButtonStyle type="submit">save</ButtonStyle>
            <ButtonStyle onClick={() => setEdit(false)}>cancel</ButtonStyle>
          </form>
        )}
      </div>
    </>
  );
};

export default ChefPortfolio;
