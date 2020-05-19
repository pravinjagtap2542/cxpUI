import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cxp-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  @Input() firstRoute: any;
  @Input() secondRoute: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
