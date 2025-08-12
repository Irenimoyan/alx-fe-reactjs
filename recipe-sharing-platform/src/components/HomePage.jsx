import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <img className="w-full" src={recipe.image} alt={recipe.title} />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{recipe.title}</h2>
              <p className="text-gray-700 text-base">{recipe.summary}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
