import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes:Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  ionViewDidEnter(){
    console.log("Did enter");
  }

  ionViewWillEnter(){
    this.recipes = this.recipesService.getAllRecipes();
  }

}
