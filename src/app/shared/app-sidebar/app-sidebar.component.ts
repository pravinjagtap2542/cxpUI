import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cxp-app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class AppSidebarComponent implements OnInit {
  public sidebarMinimized = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

}
