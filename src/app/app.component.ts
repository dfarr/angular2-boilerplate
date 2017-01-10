import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized, NavigationStart, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router : Router) {}

  ngOnInit() {}

}
