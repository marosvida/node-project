import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordsService } from '../words.service';
import { Category } from '../interfaces/category';
import { Subscription } from 'rxjs';
import { Word } from '../interfaces/words';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy{
  category: Category | undefined;
  showForm: boolean = false;

  private categorySubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute,
              private wordService: WordsService) { 
                const id = this.route.snapshot.paramMap.get('id');
                if (id) console.log(this.wordService.getCategory(id));
              }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.categorySubscription = this.wordService.getCategory(id).subscribe(
        (data: any) => {
          this.category = data;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }

  toggleTranslation(flashcard: Word): void {
    flashcard.translationVisible = !flashcard.translationVisible;
  }

  toggleAddWord() {
    this.showForm = !this.showForm;
  }

  onNewWord(word: Word) {
    if (this.category) {
      if (!this.category.LearningFacts) {
        this.category.LearningFacts = [];
      }
      this.category.LearningFacts.push(word);
    }
  }

  ngOnDestroy() {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }

}
