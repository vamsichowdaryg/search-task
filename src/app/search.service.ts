import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuery: string = '';
  private searchResults: string[] = [];

  getSearchQuery(): string {
    return this.searchQuery;
  }

  setSearchQuery(query: string): void {
    this.searchQuery = query;
  }
  getSearchResult() {
    return this.searchResults;
  }
  setSearchResult(Result: string[]): void {
    this.searchResults = Result;
  }
}
