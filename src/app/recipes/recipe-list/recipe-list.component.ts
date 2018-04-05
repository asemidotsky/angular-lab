import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Test description',
      'http://picturetherecipe.com/wp-content/uploads/2013/03/PTR-Balsamic-Glazed-Steak-Rolls1.jpg'),
    new Recipe('Second recipe', 'Some other description',
      'http://picturetherecipe.com/wp-content/uploads/2013/03/PTR-Balsamic-Glazed-Steak-Rolls1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
