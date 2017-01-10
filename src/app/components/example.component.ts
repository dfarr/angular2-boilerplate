import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
 

@Component({
  templateUrl: '../templates/example.component.html'
})

export class ExampleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {};

  ngOnInit() {

    this.route.data.subscribe((data: { value: {} }) => console.log(data.value));

  }

}
