import { useRecipeStore } from './recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';


const RecipeDetails = ({ recipeId }) => {
    const { id } = useParams();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>

            <h3>Edit Recipe</h3>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
            

        </div>
    )
}

export default RecipeDetails;