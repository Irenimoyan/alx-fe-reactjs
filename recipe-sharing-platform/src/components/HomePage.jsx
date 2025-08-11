import { useState, useEffect } from "react";

const Homepage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('/src/data.json') // fetch data from local json file
            .then(response => response.json())
            .then(data => setRecipes(data));
    }, []);


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {recipes.map(recipes => {
                <div key={recipes.id} className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl
                transform hover:scale-105 transition duration-300">
                    <img className="w-full" src="{recipes.img}" alt={recipes.title} />
                    <h2 className="font-bold text-xl mb-2">{recipes.title}</h2>
                    <p className="text-gray-700 text-base mb-4">{recipes.description}</p>
                </div>
            })}
        </div>
    );
};


export default Homepage;