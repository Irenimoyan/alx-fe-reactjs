import React from "react";
import { useRecipeStore } from './recipeStore';

const FavoritesButton = ({ recipeId }) => {
    const favorites = useRecipeStore((state) => state.favorites);
    const addFavorite = useRecipeStore((state) => state.addFavorite);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);

    const isFavorite = favorites.includes(recipeId);

    return (
        <button
            onClick={() => (isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId))}
            style={{
                background: isFavorite ? 'gold' : '#ccc',
                border: 'none',
                padding: '5px 10px',
                cursor: "pointer",
                marginLeft: "10px"
            }}
        >
            {isFavorite ? 'Remove Favorites' : 'Add favorite'}
        </button>
    );
};

export default FavoritesButton;