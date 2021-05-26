import { Component, OnInit } from '@angular/core';
import { SignatureService } from 'src/app/services/signature.service';

@Component({
  selector: 'app-add-signature',
  templateUrl: './add-signature.component.html',
  styleUrls: ['./add-signature.component.css']
})
export class AddSignatureComponent implements OnInit {

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

  submitted = false;

  constructor(private service: SignatureService) { }

  ngOnInit(): void {
  }

  saveData(): void {
    const data = {
      user_Ename: this.dataDetails.user_Ename,
      user_Aname: this.dataDetails.user_Aname,
      en_jobTitle: this.dataDetails.en_jobTitle,
      ar_jobTitle: this.dataDetails.ar_jobTitle,
      Telephone: this.dataDetails.Telephone,
      Extension: this.dataDetails.Extension,
      Mobile: this.dataDetails.Mobile,
      user_email: this.dataDetails.user_email,
    };

    this.service.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
}
