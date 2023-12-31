// flashcard.component.ts

import { Component } from '@angular/core';

interface Flashcard {
  id: number;
  imageUrl: string;
  name: string;
  translation: string;
  translationVisible?: boolean;
}

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent {
  flashcards: Flashcard[] = [
    {
      id: 1,
      imageUrl: 'https://source.unsplash.com/400x300/?dog',
      name: 'Adorable Dog',
      translation: 'Chien adorable in French',
    },
    {
      id: 2,
      imageUrl: 'https://source.unsplash.com/400x300/?cat',
      name: 'Playful Cat',
      translation: 'Chat joueur in French',
    },
    {
      id: 3,
      imageUrl: 'https://source.unsplash.com/400x300/?elephant',
      name: 'Majestic Elephant',
      translation: 'Éléphant majestueux in French',
    },
    {
      id: 4,
      imageUrl: 'https://source.unsplash.com/401x300/?sky',
      name: 'Beautiful Sky',
      translation: 'Ciel magnifique in French',
    },
    {
      id: 5,
      imageUrl: 'https://source.unsplash.com/401x300/?ocean',
      name: 'Serene Ocean',
      translation: 'Océan serein in French',
    },
    {
      id: 6,
      imageUrl: 'https://source.unsplash.com/402x300/?mountain',
      name: 'Majestic Mountain',
      translation: 'Montagne majestueuse in French',
    },
    {
      id: 7,
      imageUrl: 'https://source.unsplash.com/400x300/?paint',
      name: 'Colorful Paints',
      translation: 'Peintures colorées in French',
    },
    {
      id: 8,
      imageUrl: 'https://source.unsplash.com/401x300/?music',
      name: 'Musical Instruments',
      translation: 'Instruments de musique in French',
    },
    {
      id: 9,
      imageUrl: 'https://source.unsplash.com/402x300/?fruit',
      name: 'Fresh Fruits',
      translation: 'Fruits frais in French',
    },
  ];

  toggleTranslation(flashcard: Flashcard): void {
    flashcard.translationVisible = !flashcard.translationVisible;
  }
}
