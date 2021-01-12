import { Component, OnInit, ElementRef, EventEmitter, Input, Output, ViewChild, OnChanges, DoCheck } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, DoCheck {
  @Input() task: Task
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>(); 
  @Output() onComplete: EventEmitter<any> = new EventEmitter<any>(); 
  @ViewChild('checkbox') inputRef: ElementRef
  @Input() areAllChecked: boolean;

  isChecked: boolean = false;

  
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.isChecked = this.areAllChecked;
  }

  deleteTask() {
    const id = this.task.id;
    this.onDelete.emit(id);
  }

  completeTask() {
    this.isChecked = !this.isChecked;
    const id = this.task.id;
    const data = {
      isChecked: this.isChecked,
      id
    }
    this.onComplete.emit(data)
  }

}
