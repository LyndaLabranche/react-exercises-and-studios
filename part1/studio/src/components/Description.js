import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor(){
    let authorLink = "https://peaceloveandlowcarb.com/"
    let authorPhoto = "https://peaceloveandlowcarb.com/wp-content/uploads/2020/11/kyndra-about-img.jpg"
    let authorName = "Kyndra Holley"
    
    return (
        <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "author" width="250px" height="250px" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Peace, Love, and Low Carb</a> 
      </div>
        </div>
    );
}

class RecipeDescription extends React.Component{
    render(){
        return (
            <div> 
                <div>
                    <h1>Keto Chicken Enchilada Bowls</h1>
                    <p>This Keto Chicken Enchilada Bowls Recipe is a delicious low carb and gluten free spin on traditional enchiladas.</p>
                </div>
                <RecipeAuthor />
            </div>
        ) 
    }
}

export default RecipeDescription;