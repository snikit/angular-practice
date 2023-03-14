import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SomeService {
  constructor() {}

  private listen = new Subject<string>();
  listen$ = this.listen.asObservable();

  sendMsg(val: string) {
    this.listen.next(val);
  }
}
