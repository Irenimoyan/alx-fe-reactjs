import { useState } from 'react'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'

function App() {
  return (
    <div style={{padding:'20px'}}>
      <h1>Recipe Sharing App</h1>
      <RecipeList />
      <AddRecipeForm />

   </div>
 )
}

export default App
