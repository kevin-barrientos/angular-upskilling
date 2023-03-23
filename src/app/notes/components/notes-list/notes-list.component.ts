import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Note } from '../../models/notes.interface';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'tpg-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent implements OnInit {
  @Output()
  selected = new EventEmitter<Note>();

  notes$!: Observable<Note[]>;

  constructor(private _notesService: NotesService) {}

  ngOnInit(): void {
    this.notes$ = this._notesService.entities$.pipe(
      map((entities) =>
        entities.sort((a, b) => {
          if (a.pinned) {
            return -1;
          } else if (b.pinned) {
            return 1;
          } else {
            return 0;
          }
        })
      )
    );
  }
}
