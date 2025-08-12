import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    const ingredientList = ingredients.split(',').map(item => item.trim()).filter(Boolean);
    if (ingredientList.length < 2) {
      alert("Please include at least two ingredients.");
      return;
    }

    const newRecipe = {
      title,
      summary: steps.substring(0, 60) + "...",
      image: "https://via.placeholder.com/150",
      ingredients: ingredientList,
      instructions: steps.split('.').map(s => s.trim()).filter(Boolean)
    };

    onAddRecipe(newRecipe);
    alert("Recipe submitted successfully!");
    navigate("/"); // Redirect to Home Page
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>

      <label className="block mb-2 font-semibold">Recipe Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <label className="block mb-2 font-semibold">Ingredients (separate by commas)</label>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 mb-4 h-24 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <label className="block mb-2 font-semibold">Preparation Steps (separate by periods)</label>
      <textarea
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 mb-4 h-24 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
