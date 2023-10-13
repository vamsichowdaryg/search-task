
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  searchQuery: string = '';
  previousSearchQuery: string = '';
  isAscending: boolean = true;
  showSuggestions: boolean = false;
  // @Input() dropdownData = [] as IDropdown[];
  // @Output() updatedDropdownData = new EventEmitter<IDropdown[]>();
  suggestions: string[] = [
    ''
  ];
  searchResults: string[] = [];
  // searchHistory: string[] = [];
  constructor(private router: Router, private searchservice: SearchService) {
    this.searchQuery = this.searchservice.getSearchQuery()
    this.searchResults = this.searchservice.getSearchResult()
  }
  updatesearchQuery() {
    this.searchservice.setSearchQuery(this.searchQuery)

  }

  ngOnInit() {
    // const storedSearchHistory = localStorage.getItem('searchHistory');
    // if (storedSearchHistory) {
    //   this.searchHistory = JSON.parse(storedSearchHistory);
    // }

    if (this.searchResults.length > 0) {
      this.searchQuery = this.searchservice.getSearchQuery();
      this.searchQuery = this.searchResults[this.searchResults.length - 1];
      this.previousSearchQuery = this.searchQuery;
      this.updateSearchResults();
    }
  }

  toggleSuggestions() {
    this.showSuggestions = !this.showSuggestions;
    this.updateSuggestions();
  }

  updateSuggestions() {
    if (this.searchQuery.trim() !== '') {
      this.suggestions = [
        'Task 1',
        'Task 2',
        'Task 3',
        'Task 4',
        'Task 5',
      ].filter((task) =>
        task.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.suggestions = [
        'Task 1',
        'Task 2',
        'Task 3',
        'Task 4',
        'Task 5',
      ];
    }
  }

  toggleDirection() {
    this.isAscending = !this.isAscending;
    this.toggleSuggestions();
  }

  selectSuggestion(suggestion: string) {
    // this.dropdownData.forEach((data: IDropdown) => {
    //   data.isSelected = data.name === suggestion;
    // });
    // this.updatedDropdownData.emit(this.dropdownData);
    // this.searchHistory.push(this.searchQuery);
    this.previousSearchQuery = this.searchQuery;
    this.searchservice.setSearchQuery(suggestion);
    this.searchQuery = suggestion;
    this.showSuggestions = false;
    this.updateSearchResults();

    // localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
  }
  updateSearchResults() {
    this.searchResults = [
      'Task 1 Result',
      'Task 2 Result',
      'Task 3 Result',
    ].filter((task) =>
      task.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.searchservice.setSearchResult(this.searchResults)
  }
}
// export interface IDropdown {
//   name: string;
//   isSelected?: boolean;
// }
