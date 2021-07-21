import { Component } from '@angular/core';
import { Note } from './notes/note';
import { NotesService } from './notes/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ng-notes';

  content = '';
  constructor(private readonly notesService: NotesService) {

  }

  saveNote() {
    this.notesService.addNote(new Note(this.content))
    console.log(this.notesService.getNotes());
  }


}
