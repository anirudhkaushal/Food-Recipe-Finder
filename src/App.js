import './App.css';
import "./key";
import Axios from "axios";
import { useState } from 'react';
import RecipeTile from './RecipeTile';

function App() {

  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([])

  const YOUR_APP_ID = "17687d77"
  const YOUR_APP_KEY = "9d2a50f660b6b743a9949e052a3aa112"

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&&health=alcohol-free`;

  async function getRecipes() {
    var result = await Axios.get(url)
    setRecipes(result.data.hits)
  }

  const submit = (e) => {
    e.preventDefault()
    getRecipes()
  }

  return (
    <div className="app">
     <h1>Food Recipe Finder 😋</h1>
     <p>🔸🔸 Click on the pictures for the recipe 🔸🔸</p>
     <form className="app__searchForm" onSubmit={submit}>
       <input 
        type="text" 
        className="app__input"
        placeholder="Enter main ingredient" 
        required
        value={query}
        onChange={(e) => {setQuery(e.target.value)}}
      />
      <input
        type="submit"
        className="app__submit"
        value="Search"
      />
     </form>
     <div className="app__recipes">
       {recipes.map( (recipe) => {
          return <RecipeTile recipe={recipe} />
       })}
     </div>
    </div>
  );
}

export default App;

