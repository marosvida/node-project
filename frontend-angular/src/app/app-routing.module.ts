// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { UserAccountComponent } from './user-account/user-account.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'flashcard', component: FlashcardComponent },
  { path: 'user-account', component: UserAccountComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
