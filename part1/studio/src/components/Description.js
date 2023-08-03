import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor(){
    let authorLink = "https://peaceloveandlowcarb.com/"
    let authorPhoto = "https://peaceloveandlowcarb.com/wp-content/uploads/2020/11/kyndra-about-img.jpg"
    let authorName = "Kyndra Holley"
    
    return (
        <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "author" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Peace Love and Low Carb</a> 
      </div>
        </div>
    );
}

class RecipeDescription extends React.Component{
    render(){
        return (
            <div> 
                <div>
                    <h1>Recipe Title</h1>
                    <p>Short recipe description</p>
                </div>
                <RecipeAuthor />
            </div>
        ) 
    }
}

export default RecipeDescription;