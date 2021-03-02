import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  
  //Employees = ["John smith","William" , "Micahel van"];

  EmployeeRows = [
    { EID: 1, EmpFName: "John", EmpLName: "smith" },
    { EID: 2, EmpFName: "Steve", EmpLName: "Jobs" },
    { EID: 3, EmpFName: "Micahel", EmpLName: "Van" }
  ];

  constructor() { }

  ngOnInit(): void {
  }


  


  employetablerow = {
    EID : "",
    EmpFName :"",
    EmpLName : ""
  }

  evtCustomerSelect(tableRow){
    this.employetablerow = tableRow;
    console.log(this.employetablerow);
  }

  CustomerAdded($event)
  {
    this.EmployeeRows.push($event);
    console.log("Under the employees component");
    console.log($event);
  }

}
