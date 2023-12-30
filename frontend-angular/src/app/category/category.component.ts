import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  category: any;

  constructor(private route: ActivatedRoute,
              private wordService: WordsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.wordService.getCategory(id).subscribe( res => {
        this.category = res;
      })
    }
  }
}
