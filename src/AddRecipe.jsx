import React, { useState } from 'react';
import './AddRecipe.css';

const AddRecipe = ({ onAddRecipe }) => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (recipeName && ingredients && instructions) {
            const newRecipe = {
                name: recipeName,
                ingredients: ingredients.split(',').map(item => item.trim()).join(', '), // Display as comma-separated
                instructions,
            };

            onAddRecipe(newRecipe); // Pass new recipe to parent
            setRecipeName(''); // Clear inputs
            setIngredients('');
            setInstructions('');
            alert('Recipe added successfully!');
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="add-recipe-container">
            <h2>Add a New Recipe</h2>
            <form onSubmit={handleSubmit} className="recipe-form">
                <div className="form-group">
                    <label>Recipe Name</label>
                    <input 
                        type="text" 
                        value={recipeName} 
                        onChange={(e) => setRecipeName(e.target.value)} 
                        placeholder="Enter the recipe name" 
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label>Ingredients (separate with commas)</label>
                    <textarea 
                        value={ingredients} 
                        onChange={(e) => setIngredients(e.target.value)} 
                        placeholder="Enter ingredients, separated by commas" 
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label>Instructions</label>
                    <textarea 
                        value={instructions} 
                        onChange={(e) => setInstructions(e.target.value)} 
                        placeholder="Enter the cooking instructions" 
                        required
                    />
                </div>

                <button type="submit" className="add-recipe-btn">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipe;
