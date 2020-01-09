import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddRecipe from "./AddRecipe";
import NavBar from "./NavBar";

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
    e.preventDefault()
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
      .catch(err => console.log("sorry, could not delete recipe", err.response));
  };

  return (
    <>
      <NavBar />
      <h1>Welcome to your Chef Portfolio</h1>
      <AddRecipe />
      <div>
        {posts.map(recipe => (
          <div key={recipe.id} className="recipes">
            <p>{recipe.name}</p>
            <p>{recipe.image_url}</p>
            <p>{recipe.title}</p>
            <p>{recipe.meal_type}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <button onClick={() => editRecipe(recipe)}>Edit</button>
            <button onClick={() => deleteRecipe(recipe)}>Delete</button>
            <hr />
          </div>
        ))}

        {edit && (
          <form onSubmit={saveEdit}>
            <h3>Edit Recipe</h3>
            <input
              onChange={e =>
                setRecipeToEdit({ ...recipeToEdit, image_url: e.target.value })
              }
              value={recipeToEdit.image_url}
            />

            <input
              onChange={e =>
                setRecipeToEdit({ ...recipeToEdit, title: e.target.value })
              }
              value={recipeToEdit.title}
            />

            <input
              onChange={e =>
                setRecipeToEdit({ ...recipeToEdit, meal_type: e.target.value })
              }
              value={recipeToEdit.meal_type}
            />

            <input
              onChange={e =>
                setRecipeToEdit({
                  ...recipeToEdit,
                  ingredients: e.target.value
                })
              }
              value={recipeToEdit.ingredients}
            />

            <input
              onChange={e =>
                setRecipeToEdit({
                  ...recipeToEdit,
                  instructions: e.target.value
                })
              }
              value={recipeToEdit.instructions}
            />
            <button type="submit">save</button>
            <button onClick={() => setEdit(false)}>cancel</button>
          </form>
        )}
      </div>
    </>
  );
};

export default ChefPortfolio;
