import { compileNgModule } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @Input()
  public placeholder:string= '';

  @Output()
  public onvalue = new EventEmitter<string>();

  printvalue(value:string):void{
    this.onvalue.emit(value)
  }

}
