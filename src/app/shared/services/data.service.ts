import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  loading: boolean = false;

  constructor() { }
}
