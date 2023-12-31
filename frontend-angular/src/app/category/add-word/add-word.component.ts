import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Word } from 'src/app/interfaces/words';
import { WordsService } from 'src/app/words.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit{
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() newWord: EventEmitter<Word> = new EventEmitter<Word>();

  wordForm!: FormGroup;
  
  constructor(private fb: FormBuilder,
    private wordsService: WordsService,
    private route: ActivatedRoute
    ) { }
  
    ngOnInit(): void {
      this.wordForm = this.fb.group({
        wordFrench: ['', Validators.required],
        wordEnglish: ['', Validators.required],
        imageUrl: ['', Validators.required]
      })
    }
  
    onCloseModal(){
      this.closeModal.emit();
    }

    onCreateWord(){    
      if(this.wordForm.status === 'VALID'){
        const id = this.route.snapshot.paramMap.get('id');
        if(id) {
          this.wordsService.createWord(this.wordForm.value, id).subscribe(
            res => {
              this.closeModal.emit();
              this.newWord.emit(res);
            }
          )
        }
      }
    }
}
