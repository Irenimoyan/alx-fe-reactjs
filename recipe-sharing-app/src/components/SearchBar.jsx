import React, { useEffect } from "react";
import { useRecipeStore } from './recipeStore'

const SearchBar = () => {
    const searchTerm = useRecipeStore((state) => state.searchTerm);
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
    const filterRecipes = useRecipeStore((state) => state.filterRecipes);


    // Run filterRecipes everytime searchterm Changes

    useEffect(() => {
        filterRecipes();
    }, [searchTerm, filterRecipes]);

    return (
        <input
            type="text"
            placeholder="search Recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: '20px', padding: '8px', width: '100%' }}
        />
    );

};

export default SearchBar;