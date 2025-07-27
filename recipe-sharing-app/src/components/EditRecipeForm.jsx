import { useState } from "react";
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe }) => {
    const updateRecipe = useRecipeStore((state) => state, updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescrription] = useState(recipe.description);


    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe({ id: recipe.id, title, description });
        alert('Recipe updated!');
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                value={description}
                onChange={(e) => setDescrription(e.target.value)}
            />
        </form>
    );
}

export default EditRecipeForm;
