import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteviewComponent } from './components/noteview/noteview.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
