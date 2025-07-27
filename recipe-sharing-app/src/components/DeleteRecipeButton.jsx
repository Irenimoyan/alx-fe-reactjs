import { useNavigate } from "react-router-dom";
import { useRecipeStore } from '../recipeStore'


const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecide);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteRecipe(recipeId)
        alert('Recipe deleted!');
        navigate('/')
    };

    return <button onClick={handleDelete}>Delete Recipe</button>;
};


export default DeleteRecipeButton;