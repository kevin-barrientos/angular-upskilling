import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NotesListItemComponent } from './components/notes-list-item/notes-list-item.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NoteDetailsComponent } from './components/note-details/note-details.component';

@NgModule({
  declarations: [NotesListComponent, NotesListItemComponent, NoteDetailsComponent],
  exports: [NotesListComponent, NoteDetailsComponent],
  imports: [CommonModule, MatListModule, MatIconModule],
})
export class NotesModule {}
