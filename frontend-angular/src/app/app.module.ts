import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './home/add-category/add-category.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AddWordComponent } from './category/add-word/add-word.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlashcardComponent,
    UserAccountComponent,
    NavbarComponent,
    CategoryComponent,
    AddCategoryComponent,
    AddWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
