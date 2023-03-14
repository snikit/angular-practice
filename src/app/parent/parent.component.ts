import { Component, OnDestroy, OnInit } from '@angular/core';
import { SomeService } from '../some.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor(private someService: SomeService) {
    this.someService.listen$.subscribe((val) => {
      console.log(val);
    });
  }

  ngOnInit() {}
}
