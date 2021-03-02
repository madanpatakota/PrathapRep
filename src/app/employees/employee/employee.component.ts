import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input('custDetails') customerDetails = {
    EID: "",
    EmpFName: "",
    EmpLName: ""
  }

  // by default custdetails contains empty data....
  // Once when we click the select button then empty data overrides with another data.


  EID = "";
  EmpFName = "";
  EmpLName = "";
  EmpAdress = "";

  GetCustomer() {

  }

  // we have to emit the 3 textboxes to the employees component 

  IsAdressAvailble = false;
  IsAdressGood = "green";
  IsIndia = false;
  updateAdress($event) {
    //console.log($event);

    this.EmpAdress = $event.target.value;
    this.IsAdressAvailble = this.EmpAdress.length > 0 ? true : false;
    this.IsAdressGood = this.EmpAdress.length > 10 ? "green" : "red";
    this.IsIndia = this.EmpAdress == "India" ? true : false;
  }

  //string s = "";
  //number n = 0;
  //HTMLINPutElement EmpID 

  //exports the data
  @Output() onAddCustomer = new EventEmitter<{
    EID: string, EmpFName: string, EmpLName: string
  }>();


  //GetCustomer()

  @ViewChild('EmpID') vEmpID:ElementRef;

  AddCustomer(EMPID: HTMLInputElement, EFName: HTMLInputElement, ELname: HTMLInputElement) {
    //console.log(EMPID.value + "  " + EFName.value + " " + ELname.value);

    console.log("viewchild" , this.vEmpID.nativeElement);

    // it injects dta
    this.onAddCustomer.emit({
      EID: EMPID.value,
      EmpFName: EFName.value,
      EmpLName: ELname.value
    })


  }

}




