import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-creating-form',
  templateUrl: './creating-form.component.html',
  styleUrls: ['./creating-form.component.css']
})
export class CreatingFormComponent implements OnInit {
  @Output() onCreate: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onCompleteAll: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() areAllChecked: boolean;

  text: string = '';
  isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  createTask() {
    if(this.text.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: this.text,
        checked: false
      }
      this.onCreate.emit(newTask);
      console.log(newTask);
      this.text = '';
    }
  }

  completeAll() {
    this.isChecked = !this.isChecked;
    this.onCompleteAll.emit(this.isChecked);
  }

}
