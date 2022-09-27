import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.models';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // creating a public property called employees and assigning it to list of arrays.
  employees:Employee[]=[
    {
      id:'abcde',
      firstName:'Fremont Babra',
      email:'fremont.babra@gmail.com',
      phone:1234567890,
      salary:50,
      department:'hardware'
    },
    {
      id:'abcdf',
      firstName:'Fremont Babra',
      email:'fremont.babra@gmail.com',
      phone:1234567890,
      salary:50,
      department:'hardware'
    },
    {
      id:'abcdfcv',
      firstName:'Sheilla Babra',
      email:'1234@gmail.com',
      phone:98765432170,
      salary:1000,
      department:'hardware'
    },
    // {
    //   id:'abcdf',
    //   firstName:'Sheilla Babra',
    //   email:'1234@gmail.com',
    //   phone:09876543217,
    //   salary:100,
    //   department:'hardware'
    // }
    ];
    
  
  constructor() { }

  ngOnInit(): void {
  }

}
