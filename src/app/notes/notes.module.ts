import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesService } from './notes.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [NotesService],
  exports: []
})
export class NotesModule { }
