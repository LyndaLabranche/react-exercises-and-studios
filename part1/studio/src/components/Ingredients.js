import styles from './Ingredients.module.css';

function RecipeIngredients(){
   const ingredients = [
      "1 ½ pounds boneless skinless chicken breasts, cut into small bite-sized pieces",
      "4 tablespoons taco seasoning",
      "1 cup enchilada sauce, extra for serving",
      "1 - 10 ounce can diced tomatoes and green chiles, juices drained",
      "½ cup shredded mozzarella cheese"
   ]
    return (
           <div>
      <h3>Recipe Ingredients</h3>
      <ul className = {styles.ingredientList}>
         <li>{ingredients[0]}</li>
         <li>{ingredients[1]}</li>
         <li>{ingredients[2]}</li>
         <li>{ingredients[3]}</li>
         <li>{ingredients[4]}</li>
      </ul>
   </div>
    )
}

export default RecipeIngredients;