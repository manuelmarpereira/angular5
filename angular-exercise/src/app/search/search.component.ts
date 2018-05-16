import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <label>Search </label>
    <input class="input-margin" placeholder="Search in Articles" #a (keyup)="term.emit(a.value)" />
    <label>Search by</label>
    <select class="input-margin" [(ngModel)]="selectedValue" (ngModelChange)="onColChanged($event)">
      <option *ngFor="let option of options" [value]="option.value">
       {{option.name}}
      </option>
    </select>

  `,
  styles: [`.input-margin{margin:10px}`]
})
export class SearchComponent implements OnInit {

  @Output()
  term = new EventEmitter<string>();

  @Output()
  searchCol = new EventEmitter<string>();

  selectedValue = "name";

  options: IOption[] = [
    { value: "reference", name: 'Reference' },
    { value: "name", name: 'Name' },
    { value: "description", name: 'Description' },
    { value: "year", name: 'Year' },
  ];

  constructor() { }

  ngOnInit() {
  }

  onColChanged(newvalue): void {
    this.searchCol.emit(newvalue);
  }

}

interface IOption {value:string, name: string}

