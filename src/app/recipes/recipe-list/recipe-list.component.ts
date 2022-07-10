import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('Receta de prueba', 'Esta receta es solo una prueba', 'https://live.staticflickr.com/5217/5460746911_4854236a6b_b.jpg'),
    new Recipe('Otra receta de prueba', 'Esta receta sigue siendo solo una prueba', 'https://img.freepik.com/foto-gratis/espaguetis-italianos-salsa-tomate-sarten_1220-4240.jpg?w=2000')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
