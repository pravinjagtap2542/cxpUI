import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { map, startWith, pairwise } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'body',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  firstRoute: any;
  secondRoute: any;

  constructor(private titleService: Title, private metaService: Meta, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
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
