import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import './App.css'

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SearchBar />
                <RecipeList />
                <AddRecipeForm />
                
              </div>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );

}



export default App;
