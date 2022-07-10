import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient('Manzanas', 1),
    new Ingredient('Tomates', 5),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  onIngredientsCleared(clear:boolean){
    this.ingredients = [];
  }

  // onIngredientDeleted(ingredient: Ingredient){
  //   const aux = this.ingredients.filter(el => el != ingredient );
  //   this.ingredients = aux;
  // }

}
