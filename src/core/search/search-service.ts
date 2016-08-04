import 'rxjs/add/operator/let';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from 'src/core/interfaces';
import { SearchActions } from './search-actions';
import { getSearchQuery } from './selectors';


@Injectable()
export class SearchService {
  query$: Observable<string>;

  constructor(private actions: SearchActions, private store$: Store<AppState>) {
    this.query$ = store$.let(getSearchQuery());
  }

  loadSearchResults(query: string): void {
    if (typeof query === 'string' && query.length) {
      this.store$.dispatch(
        this.actions.loadSearchResults(query)
      );
    }
  }
}