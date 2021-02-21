
import { Component } from '@angular/core'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  // template: `<p>Person Details : </p>
  // <p>Person Details : </p>
  // <p>Person Details : </p>
  // <p>Person Details : </p>
  //`,
  //styleUrls : ['./person.component.css']
  styles: [
    `p{
      margin: 5px;
      font-size : large;
    }`

  ]

})

export class PersonComponent {


  IsDisabled = true;
  inputtype = "text"

  constructor() {
    setTimeout(() => {
      this.IsDisabled = false;
      this.inputtype = "checkbox";
    }, 5000)
  }


  customerName = "Madan";  // which may be generated from DB 

  twowaycustomerName = "";

  customerID = 1;   // 

  getCustomerName() {
    return this.customerName;
  }


  updateCustomerName() {
    this.customerName = "John Smith";
    console.log(this.twowaycustomerName);
  }

  evtComments(event) {
    this.customerName = event.target.value;
    //console.log(this.twowaycustomerName);
  }
}