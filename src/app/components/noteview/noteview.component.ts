import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Note } from '../../model/model';

@Component({
  selector: 'app-noteview',
  templateUrl: './noteview.component.html',
  styleUrls: ['./noteview.component.css']
})
export class NoteviewComponent implements OnInit {

  @Input()
  note: Note

  @Input()
  index: number

  @Output()
  deleteEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit() { 
  }

  onDelete(): void {
    console.log(">> Delete clicked")
    console.log("note")
    console.log(this.note)
    this.deleteEvent.emit(this.index)
  }
}
