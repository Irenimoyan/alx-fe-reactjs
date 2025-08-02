import { create } from "zustand";

const setRecipes = create((set) => ({
    recipes: [
        { id: 1, title: "Spaghetti", Description: "Delicious pasta with sauce" },
        { id: 2, title: "Pancakes", Description: "Fluffy breakfast Treat" },
        { id: 3, title: "Salad", Description: "Healthy Vegetable mix" }
        
    ],
    searchTerm: "",
    filteredRecipes:[],
    recommendations: [],
    favorites: [],
    
    // Actions
    addRecipe: (newRecipe) =>
        set((state) => ({
            recipes: [...state.recipes, newRecipe]
        })),
    
    deleteRecipe: (id) =>
        set((state) => ({
            recipes: state.recipes.filter((recipes)=>recipes.id !== id),
        })),
    updateRecipe: (updateRecipe) =>
        set((state) => ({
            recipes: state.recipes.map((recipes) =>
                recipes.id === updateRecipe.id ? updateRecipe : recipes
            ),
        })),
    setRecipe: (recipes) => set({ recipes }),
    
    setSearchTerm: (term) => set({ searchTerm: term }),
    filterRecipes: () =>
        set((state) => ({
            filterRecipes: state.recipes.filter((recipes) =>
                recipes.title.toLoweCase().includes(state.searchTerm.toLoweCase())
            ),
        })),
    
    addFavorites: (recipesId) =>
        set((state) => ({ favorites: [...state.favorites, recipesId] })),
    
    removeFavorite: (recipesId) =>
        set((state) => ({
            favorites:state.favorites.filter((id)=>id!==recipesId),
        })),
    generateRecommendations: () =>
        set((state) => {
            const recommend = state.recipes.filter(
                (recipes) => state.favorites.includes(recipes.id) && Math.random() > 0.5
            );
            return { recommendations: recommended };
        }),
    
    
    
}))

export default setRecipes;
