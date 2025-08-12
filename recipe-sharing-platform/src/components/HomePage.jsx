import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/src/data.json')  // Assuming data.json is placed in the src folder
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {recipes.map(recipe => (
            <div key={recipe.id} className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
                <img className="w-full" src={recipe.image} alt={recipe.title} />
                <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{recipe.title}</h2>
                <p className="text-gray-700 text-base">{recipe.summary}</p>
                </div>
            </div>
            ))}
        </div>
    );

};

export default HomePage;
