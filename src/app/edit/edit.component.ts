import { Component, OnInit } from '@angular/core';
import { Employee } from './../Employee';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  model = new Employee(101, 'Dr IQ', 20, 15000);

  ngOnInit(): void {
  }
  submitted = false;

  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.model); }

}
