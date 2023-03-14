import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { SomeService } from './some.service';
import { ChildComponent } from './child/child.component';
import { CapsPipe } from './caps.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ParentComponent, ChildComponent,CapsPipe],
  exports: [ParentComponent],
  providers: [SomeService],
})
export class AppModule {}
