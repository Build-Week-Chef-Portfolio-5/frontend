import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AllRecipeNav from "./AllRecipeNav";

const AllRecipes = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/posts")
      .then(res => {
        setPosts(res.data);
        console.log(posts);
      })
      .catch(err =>
        console.log("sorry, an error has occurred while fetching recipes", err)
      );
  }, []);

  return (
    <>
      <AllRecipeNav />
      <h1 className="title">
        Chef's Recipes{" "}
        <span role="img" aria-label="chef">
          👨🏻‍🍳
        </span>
      </h1>
      <div>
        {posts.map(recipe => (
          <div key={recipe.id} className="recipes">
            <p className="recipe-input">Chef's Name: {recipe.name}</p>
            <p className="recipe-input">URL: {recipe.image_url}</p>
            <p className="recipe-input">Title: {recipe.title}</p>
            <p className="recipe-input">Meal Type: {recipe.meal_type}</p>
            <p className="recipe-input">Ingredients: {recipe.ingredients}</p>
            <p className="recipe-input">Instructions: {recipe.instructions}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllRecipes;
