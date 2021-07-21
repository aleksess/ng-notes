import { Injectable } from '@angular/core';
import { Note } from "./note";


@Injectable({
  providedIn: 'any'
})
export class NotesService {
  protected notes: Note[] = [];


  constructor() { 
    const arrayString = localStorage.getItem('ng-notes-notes');
    if (arrayString !== null) {
      this.notes = JSON.parse(arrayString);
    } else {
      this.notes = [];
    } 
  }

  public saveNotes() {
    localStorage.setItem('ng-notes-notes', JSON.stringify(this.notes));
  }

  public getNotes() {
    return this.notes;
  }

  public addNote(n: Note) {
    this.notes.push(n);
  }

  public getNote(index: number) {
    return this.notes[index];
  }


}
