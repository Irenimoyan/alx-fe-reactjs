import { useState } from "react";
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe }) => {
    const updateRecipe = useRecipeStore((state) => state, updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescrription] = useState(recipe.description);


    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe({ id: recipe.id, title, description });
        alert('Recipe updated!');
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <textarea
                value={description}
                onChange={(event) => setDescrription(event.target.value)}
            />
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default EditRecipeForm;
