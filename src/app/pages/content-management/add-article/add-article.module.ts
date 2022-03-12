import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddArticleRoutingModule } from './add-article-routing.module';
import { AddArticleComponent } from './add-article.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddArticleComponent
  ],
  imports: [
    CommonModule,
    AddArticleRoutingModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddArticleModule { }
