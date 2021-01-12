import { Component, DoCheck, ElementRef, ViewChild } from '@angular/core';

export interface Task {
  id: number;
  text: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  areAllChecked: boolean = false;

  addTask(task: Task) {
    this.tasks.push(task)
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(item => item.id !== id)
  }

  completeTask(data: any) {
    this.tasks.forEach(item => {
      if(item.id === data.id) {
        item.checked = data.isChecked;
      }
    })
  }

  markAll(isChecked: boolean) {
    this.tasks.forEach(item => item.checked = isChecked);
    this.areAllChecked = isChecked;
    console.log(this.areAllChecked);
    

  } 
}
