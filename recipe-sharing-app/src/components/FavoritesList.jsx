import React from "react";
import { useRecipeStore } from './recipeStore';


const FavoritesList = () => {
    const favorites = useRecipeStore((state) =>
        state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
    );

    return (
        <div>
            <h2>My Favorites</h2>
            {favorites.length === 0 ? (
                <p>No favorite recipes yet.</p>
            ) : (
                favorites.map((recipe) => (
                    <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px o', padding: '10px 0' }}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default FavoritesList;