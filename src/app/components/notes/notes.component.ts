import { Component, OnInit,ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Note } from "../../model/model";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @ViewChild("notesForm")
  notesForm : NgForm

  @Output()
  notesCreatedEvent = new EventEmitter<Note>()

  constructor() { }

  ngOnInit() {
    console.log("INIT")
  }

  processForm(): void {
    console.log("Form submitted")
    console.log(this.notesForm.value)
    
    
    this.notesCreatedEvent.emit({
      title: this.notesForm.value.title,
      notes: this.notesForm.value.notes,
      date: new Date().toUTCString()
    })

    this.notesForm.reset();
  }

}
