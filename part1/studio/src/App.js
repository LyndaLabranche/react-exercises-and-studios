import RecipeDescription from './components/Description'
import RecipeIngredients from './components/Ingredients';
import RecipePhoto from './components/Photos';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <RecipePhoto />
        <div>
          <RecipeDescription />
          <RecipeIngredients />
        </div>
      </div>
    </div>
  );
}

export default App;
