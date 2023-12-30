import { Component, OnDestroy, OnInit } from '@angular/core';
import { WordsService } from '../words.service';
import { Subscription } from 'rxjs';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  categories: any[] = [];
  showForm: boolean = false;

  private categoriesSubscription: Subscription | undefined;

  constructor(private wordsService: WordsService) { 
    console.log(this.wordsService.getCategories());
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesSubscription = this.wordsService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  toggleAddCategory() {
    this.showForm = !this.showForm;
  }

  onNewCategory(category: Category) {
    this.categories.push(category);
  }

  ngOnDestroy() {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

}
