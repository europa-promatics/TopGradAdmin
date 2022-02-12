import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

export interface Task1 {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks1?: Task1[];
}

export interface Task2 {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks2?: Task2[];
}

export interface Task3 {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks3?: Task3[];
}

@Component({
  selector: 'app-edit-sub-admin',
  templateUrl: './edit-sub-admin.component.html',
  styleUrls: ['./edit-sub-admin.component.scss']
})
export class EditSubAdminComponent implements OnInit {


	task: Task = {
    name: 'User Management',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Graduates', completed: false, color: 'accent'},
      {name: 'Employers', completed: false, color: 'accent'},
      {name: 'Sub Admin', completed: false, color: 'accent'}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

//**************************** for checkbox 2 ****************************************
  task1: Task1 = {
    name: 'Jobs Management',
    completed: false,
    color: 'primary',
    subtasks1: [
      {name: 'Edit', completed: false, color: 'accent'},
      {name: 'Approve', completed: false, color: 'accent'},
      {name: 'Delete', completed: false, color: 'accent'}
    ]
  };

 allComplete1: boolean = false;

  updateAllComplete1() {
    this.allComplete1 = this.task1.subtasks1 != null && this.task1.subtasks1.every(t => t.completed);
  }

  someComplete1(): boolean {
    if (this.task1.subtasks1 == null) {
      return false;
    }
    return this.task1.subtasks1.filter(t => t.completed).length > 0 && !this.allComplete1;
  }

  setAll1(completed: boolean) {
    this.allComplete1 = completed;
    if (this.task1.subtasks1 == null) {
      return;
    }
    this.task1.subtasks1.forEach(t => t.completed = completed);
  }

 //**************************** for checkbox 3 ****************************************
  task2: Task2 = {
    name: 'Payment Management',
    completed: false,
    color: 'primary',
    subtasks2: [
      {name: 'Invoices', completed: false, color: 'accent'},
      {name: 'View', completed: false, color: 'accent'},
      {name: 'Delete', completed: false, color: 'accent'}
    ]
  };

 allComplete2: boolean = false;

  updateAllComplete2() {
    this.allComplete2 = this.task2.subtasks2 != null && this.task2.subtasks2.every(t => t.completed);
  }

  someComplete2(): boolean {
    if (this.task2.subtasks2 == null) {
      return false;
    }
    return this.task2.subtasks2.filter(t => t.completed).length > 0 && !this.allComplete2;
  }

  setAll2(completed: boolean) {
    this.allComplete2 = completed;
    if (this.task2.subtasks2 == null) {
      return;
    }
    this.task2.subtasks2.forEach(t => t.completed = completed);
  }


 //**************************** for checkbox 4 ****************************************
  task3: Task3 = {
    name: 'General Management',
    completed: false,
    color: 'primary',
    subtasks3: [
      {name: 'Home Page', completed: false, color: 'accent'},
      {name: 'How it Works', completed: false, color: 'accent'},
      {name: 'FAQs', completed: false, color: 'accent'}
    ]
  };

 allComplete3: boolean = false;

  updateAllComplete3() {
    this.allComplete3 = this.task3.subtasks3 != null && this.task3.subtasks3.every(t => t.completed);
  }

  someComplete3(): boolean {
    if (this.task3.subtasks3 == null) {
      return false;
    }
    return this.task3.subtasks3.filter(t => t.completed).length > 0 && !this.allComplete3;
  }

  setAll3(completed: boolean) {
    this.allComplete3 = completed;
    if (this.task3.subtasks3 == null) {
      return;
    }
    this.task3.subtasks3.forEach(t => t.completed = completed);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
