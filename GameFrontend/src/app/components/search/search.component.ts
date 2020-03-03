import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchContent = '';
  isCategory = true;
  isName = false;
  hint = 'enter Category';
  @Output() changeList: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeOption(){
    this.isCategory = !this.isCategory;
    this.isName = !this.isName;
    this.hint = 'enter '+ (this.isCategory ? 'Category' : 'Name');
  }

  searchByContent(){
    this.changeList.emit(this.searchContent);
    this.changeList.emit(this.isCategory.toString());
  }

}
