import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import AddRecipe from './AddRecipe';
import ViewRecipes from './ViewRecipes';
import './App.css'; 

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
};

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/add-recipe" className="nav-link">Add Recipe</Link>
            </li>
            <li className="nav-item">
              <Link to="/view-recipes" className="nav-link">View Recipes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
                <Route 
                    path="/add-recipe" 
                    element={<AddRecipe onAddRecipe={handleAddRecipe} />} 
                />
                <Route 
                    path="/view-recipes" 
                    element={<ViewRecipes recipes={recipes} />} 
                />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
