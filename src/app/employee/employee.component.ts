import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  EID = "";
  EmpFName = "";
  EmpLName = "";
  EmpAdress = "";

  GetCustomer() {

  }

  IsAdressAvailble = false;
  
  updateAdress($event) {
    //console.log($event);

    this.EmpAdress = $event.target.value;
    this.IsAdressAvailble = this.EmpAdress.length > 0 ? true : false;

  }
}
