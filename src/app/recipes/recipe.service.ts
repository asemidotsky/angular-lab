import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'Test description',
            'http://picturetherecipe.com/wp-content/uploads/2013/03/PTR-Balsamic-Glazed-Steak-Rolls1.jpg'),
        new Recipe('Second recipe', 'Some other description',
            'http://picturetherecipe.com/wp-content/uploads/2013/03/PTR-Balsamic-Glazed-Steak-Rolls1.jpg')
        ];

    getRecipes() {
        return this.recipes.slice();
    }
}
