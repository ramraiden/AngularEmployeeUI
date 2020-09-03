import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-getdetails',
  templateUrl: './getdetails.component.html',
  styleUrls: ['./getdetails.component.css']
})
export class GetdetailsComponent implements OnInit {
  employees: Array<any>;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  this.employeeService.getAll().subscribe(data => {
    console.log(data);  
    this.employees = data;
  });
  console.log(this.employees);
  }

}
