import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes:Recipe[] = [
    {
      id:'r1',
      title:"RedWine",
      imageUrl:"https://img.freepik.com/free-psd/wine-banner-template_23-2148569994.jpg?w=500",
      ingredients:['Ginger',"Okro water","semon"]
    },
    {
      id:'r2',
      title:"DarkWine",
      imageUrl:"https://drinkallotters.com.ng/wp-content/uploads/2021/02/IMG-20210217-WA0005.jpg",
      ingredients:['Ginger',"Okro water","semon"]
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes]
  }

  getRecipe(recipeId:string){
    return {...this.recipes.find(recipe=>{
      return recipe.id==recipeId;
    })}
  }

  deleteRecipe(recipeId:string){
    this.recipes = this.recipes.filter(recipe=>{
      return recipe.id!==recipeId;
    })
  }
}
