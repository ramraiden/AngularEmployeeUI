import { Component, OnInit } from '@angular/core';
import { Employee } from './../Employee';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  model = new Employee(101, 'Dr IQ', 20, 15000);

  ngOnInit(): void {
  }
  submitted = false;

  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.model); }

}
