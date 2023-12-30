import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { WordsService } from 'src/app/words.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit{
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() newCategory: EventEmitter<Category> = new EventEmitter<Category>();

  catForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private wordsService: WordsService) { }

  ngOnInit(): void {
    this.catForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      targetAudience: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
    })
  }

  onCloseModal(){
    this.closeModal.emit();
  }

  onCreateCat(){    
    if(this.catForm.status === 'VALID'){
      this.wordsService.createCategory(this.catForm.value).subscribe(
        res => {
          this.closeModal.emit();
          this.newCategory.emit(res);
        }
      )
    }
  }
}
