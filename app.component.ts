import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1></h1>
  <keg-list [kegs]="kegs" (editSender)="editKeg($event)"></keg-list>
  <edit-keg [selectedKeg]="selectedKeg" (doneEditionSender)="finishedEditing()"></edit-keg>
  `
})

export class AppComponent {

  kegs: Keg[] = [
    new Keg('name1', 'brand1', 100.5, 30.5)
  ];
  selectedKeg = null;

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }
  finishedEditing(){
    this.selectedKeg = null;
  }
}
