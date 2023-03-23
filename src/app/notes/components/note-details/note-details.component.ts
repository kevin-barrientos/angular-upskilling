import { Component, Input } from '@angular/core';
import { Note } from '../../models/notes.interface';

@Component({
  selector: 'tpg-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css'],
})
export class NoteDetailsComponent {
  @Input()
  note!: Note;
}
