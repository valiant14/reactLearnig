import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  dataDetails: any = {
    user_Ename: "",
    user_Aname: "",
    en_jobTitle: "",
    ar_jobTitle: "",
    Telephone: "",
    Extension: "",
    Mobile: "",
    user_email: "",
  }

  render: any = []

  constructor() { }

  ngOnInit(): void {
    
  }

  // getData(){
  //   let data = {
  //     user_Ename: this.dataDetails.user_Ename,
  //       user_Aname: this.dataDetails.user_Aname,
  //       en_jobTitle: this.dataDetails.en_jobTitle,
  //       ar_jobTitle: this.dataDetails.ar_jobTitle,
  //       Telephone: this.dataDetails.Telephone,
  //       Extension: this.dataDetails.Extension,
  //       Mobile: this.dataDetails.Mobile,
  //       user_email: this.dataDetails.user_email,
  //   }
  //     console.log(data)
  // }

}
