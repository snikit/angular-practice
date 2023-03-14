import { Component, OnInit } from '@angular/core';
import { SomeService } from '../some.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor(private someService: SomeService) {}

  ngOnInit() {}

  sendMsg(){
    this.someService.sendMsg("some msg");
  }
}
