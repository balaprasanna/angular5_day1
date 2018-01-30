import { Component, OnInit } from '@angular/core';

import { Note } from "./model/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mynotes: Note[] = [];
  title = 'app';
  

  ngOnInit() {
    
  }

  updateNotesList(notes :Note) :void {
    console.log("New note created")
    console.log(notes)
    this.mynotes.push(notes)
  }

  deleteNotesHandler(index: number):void {
    this.mynotes.splice(index, 1);
    console.log(">> Note at index %s deleted",index)
  }
  
}
