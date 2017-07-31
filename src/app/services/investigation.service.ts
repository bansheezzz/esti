import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { apiRoot } from './../app.global.constants';
import { Investigation } from 'app/types/investigation';

@Injectable()
export class InvestigationService {
  private currentInvestigation = new BehaviorSubject<Investigation>(null);

  constructor(private http: HttpClient) { }

  public setInvestigationContext(investigation: Investigation) {
    this.currentInvestigation.next(investigation);
  }

  public getInvestigationContext(): Observable<Investigation> {
    return this.currentInvestigation.asObservable();
  }
}
