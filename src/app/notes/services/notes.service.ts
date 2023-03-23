import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from '../models/notes.interface';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private _entities: Note[] = [
    {
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor elit sed vulputate mi sit. Vitae purus faucibus ornare suspendisse sed. Est lorem ipsum dolor sit amet. Turpis egestas integer eget aliquet nibh praesent.',
      pinned: true,
      updatedOn: new Date().toISOString(),
    },
    {
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet cursus sit amet. Praesent elementum facilisis leo vel fringilla est ullamcorper. Eget velit aliquet sagittis id. Ullamcorper sit amet risus nullam.',
      pinned: false,
      updatedOn: new Date().toISOString(),
    },
    {
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pharetra vel turpis nunc eget lorem dolor. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Et pharetra pharetra massa massa ultricies. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id.',
      pinned: false,
      updatedOn: new Date().toISOString(),
    },
    {
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Eget egestas purus viverra accumsan in. Semper quis lectus nulla at volutpat.',
      pinned: true,
      updatedOn: new Date().toISOString(),
    },
    {
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu non. Viverra nam libero justo laoreet sit amet cursus sit amet. Imperdiet massa tincidunt nunc pulvinar. Enim ut tellus elementum sagittis.',
      pinned: false,
      updatedOn: new Date().toISOString(),
    },
    {
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id volutpat lacus laoreet. Leo a diam sollicitudin tempor id eu. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Nec ullamcorper sit amet risus nullam eget felis eget nunc.',
      pinned: false,
      updatedOn: new Date().toISOString(),
    },
    {
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet massa vitae tortor condimentum lacinia. Ut sem nulla pharetra diam sit amet nisl suscipit. Sodales ut etiam sit amet nisl purus in mollis. Adipiscing at in tellus integer feugiat.',
      pinned: false,
      updatedOn: new Date().toISOString(),
    },
    {
      title: 'Last one',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna. Blandit aliquam etiam erat velit scelerisque in dictum. Risus viverra adipiscing at in tellus integer feugiat. Leo urna molestie at elementum eu facilisis sed odio morbi.',
      pinned: true,
      updatedOn: new Date().toISOString(),
    },
  ];

  private _entities$ = new BehaviorSubject<Note[]>(this._entities);

  constructor() {}

  get entities$(): Observable<Note[]> {
    return this._entities$.asObservable();
  }
}
