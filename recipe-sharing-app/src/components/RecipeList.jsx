import { useRecipesStore } from '../recipeStore'

const RecipeList = () => {
    const recipes = useRecipesStore(state => state.recipes);

    return (
        <div>
            {recipes.map(recipes => (
                <div key={recipes.id}>
                    <h3>{recipes.title}</h3>
                    <p>{recipes.description}</p>
                </div>
            ))}
        </div>
    )
}
export default RecipeList;