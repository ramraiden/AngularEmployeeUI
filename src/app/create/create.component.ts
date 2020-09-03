import { Employee } from './../Employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  model = new Employee(101, 'Dr IQ', 20, 15000);

  ngOnInit(): void {
  }
  submitted = false;

  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.model); }

}
