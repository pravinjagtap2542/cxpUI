import { Component, OnInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute, RoutesRecognized, NavigationCancel } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { map, startWith, pairwise } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { DataService } from './shared/services/data.service'

@Component({
  selector: 'body',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterContentChecked  {
  firstRoute: any;
  secondRoute: any;

  constructor(public changeDetector: ChangeDetectorRef, public dataService: DataService, private titleService: Title, private metaService: Meta, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngAfterContentChecked() : void {
    this.changeDetector.detectChanges();
 }

  ngOnInit() {
    this.dataService.loading = true;
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.dataService.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });

    this.router.events
    .pipe(
      startWith(new NavigationEnd(0, '/', '/')),
      filter(e => e instanceof NavigationEnd),
      pairwise(),
      map(() => this.activatedRoute),
      map((route) => {
          this.firstRoute = route.firstChild.snapshot.data.title;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
      }),
      mergeMap((route) => route.data))
      .subscribe((event) => {
         this.secondRoute = event.title;
      });
  }
}
