import './App.css';
import "./key";
import Axios from "axios";
import { useState } from 'react';
import RecipeTile from './RecipeTile';

function App() {

  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([])
  const [healthLabels, sethealthLabels] = useState('vegan')

  const YOUR_APP_ID = "17687d77"
  const YOUR_APP_KEY = "9d2a50f660b6b743a9949e052a3aa112"

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&&health=${healthLabels}`;

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
      <select className="app__healthLabels">
        <option value="vegan" onClick={()=>sethealthLabels('vegan')}>vegan</option>
        <option value="vegetarian" onClick={()=>sethealthLabels('vegetarian')}>vegetarian</option>
        <option value="paleo" onClick={()=>sethealthLabels('paleo')}>paleo</option>
        <option value="dairy-free" onClick={()=>sethealthLabels('dairy-free')}>dairy-free</option>
        <option value="gluten-free" onClick={()=>sethealthLabels('gluten-free')}>gluten-free</option>
        <option value="wheat-free" onClick={()=>sethealthLabels('wheat-free')}>wheat-free</option>
        <option value="low-sugar" onClick={()=>sethealthLabels('low-sugar')}>low-sugar</option>
        <option value="egg-free" onClick={()=>sethealthLabels('egg-free')}>egg-free</option>
        <option value="peanut-free" onClick={()=>sethealthLabels('peanut-free')}>peanut-free</option>
        <option value="tree-nut-free" onClick={()=>sethealthLabels('tree-nut-free')}>tree-nut-free</option>
        <option value="soy-free" onClick={()=>sethealthLabels('soy-free')}>soy-free</option>
        <option value="fish-free" onClick={()=>sethealthLabels('fish-free')}>fish-free</option>
        <option value="shellfish-free" onClick={()=>sethealthLabels('shellfish-free')}>shellfish-free</option>
      </select>
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
