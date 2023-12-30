import { Component, OnDestroy, OnInit } from '@angular/core';
import { WordsService } from '../words.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  categories: any[] = [];

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

  ngOnDestroy() {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

}
