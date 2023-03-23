import { Component, Input } from '@angular/core';
import { Note } from '../../models/notes.interface';

@Component({
  selector: 'tpg-notes-list-item',
  templateUrl: './notes-list-item.component.html',
  styleUrls: ['./notes-list-item.component.css'],
})
export class NotesListItemComponent {
  @Input()
  note!: Note;
}
