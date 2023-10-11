import { Component } from '@angular/core';
type todo = {
  name: string;
  id: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// class AppComponent {
//   title = 'todo-task';

// }
export class AppComponent {
  searchResults: any[] = [];

  performSearch(searchTerm: string) {
    const items: any[] = [
      { id: 1, name: 'Task 1', description: 'Description for Task 1' },
      { id: 2, name: 'Task 2', description: 'Description for Task 2' },
      { id: 3, name: 'Task 3', description: 'Description for Task 3' },
      { id: 4, name: 'Another Task', description: 'Description for Another Task' },
      // Add more items as needed
    ];

    if (items && items.length > 0) {
      this.searchResults = items.filter(item => {
        return item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    } else {
      this.searchResults = [];
    }
  }
}
