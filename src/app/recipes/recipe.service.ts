import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  // recipeSelected = new Subject<Recipe>();

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
  new Recipe('Hamburguesa', 'Hamburguesa con queso y huevo', 'https://img.freepik.com/foto-gratis/hamburguesa-vista-frontal-huevo-frito-tabla-cortar_23-2148784523.jpg?w=2000', [
    new Ingredient('Pan de hamburguesa', 1), new Ingredient('Huevo', 1), new Ingredient('Loncha de queso', 2)
   ]),
  new Recipe('Espagueti', 'Espagueti con carne y huevo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1OmEw4-tKpZxDKen5sRLqM8Rdx4Pn_n1-hxucZIzFYfi4F1A4fCldFLDFh5iSI3ZFpo&usqp=CAU', [
    new Ingredient('Espagueti (en gramos)', 300), new Ingredient('Queso en polvo (en gramos)', 50), new Ingredient('Carne picada (en gramos)', 250), new Ingredient('Huevo', 2), new Ingredient('Bote de tomate frito', 1/3)
  ])
];

getRecipes(){
  return this.recipes.slice();
}
addIngredientsToShoppingList(ingredients: Ingredient[]) {
   this.slService.addIngredients(ingredients);
 }

  getRecipe(id:number){
    return this.recipes[id]
  }

}
