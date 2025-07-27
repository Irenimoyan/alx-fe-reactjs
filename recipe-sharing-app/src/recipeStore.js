import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: [],
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
        set((state) => ({ 
            favorites: state.favorites.includes(recipesId)
                ? state.favorites
                :[...state.favorites, recipesId]
         })),
    
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
