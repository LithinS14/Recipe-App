import React from 'react';
import './ViewRecipes.css';

const ViewRecipes = ({ recipes }) => {
    return (
        <div className="view-recipes-container">
            <h2>View Recipes</h2>
            {recipes.length === 0 ? (
                <p>No recipes have been added yet.</p>
            ) : (
                <ul className="recipe-list">
                    {recipes.map((recipe, index) => (
                        <li key={index} className="recipe-item">
                            <h3>{recipe.name}</h3>
                            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                            <p><strong>Instructions:</strong> {recipe.instructions}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ViewRecipes;
