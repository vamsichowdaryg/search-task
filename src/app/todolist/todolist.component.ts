import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  searchTerm: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  search() {
    this.searchEvent.emit(this.searchTerm);
  }
}
