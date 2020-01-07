import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ChefPortfolio = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get("/:id/posts")
        .then(res => {
            setPosts(res.data);
            console.log(posts)
        })
        .catch(err => console.log("sorry, an error has occurred while fetching chef portfolio page", err))
    }, []);

    return (
        <>
        <h1>Welcome to your Chef Portfolio</h1>
        {/* will be putting the components w/forms for the recipes CRUD and mapping through */}
        </>
    );
};

export default ChefPortfolio;