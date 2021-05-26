import { Component, OnInit } from '@angular/core';
import { SignatureService } from 'src/app/services/signature.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signature-details',
  templateUrl: './signature-details.component.html',
  styleUrls: ['./signature-details.component.css']
})
export class SignatureDetailsComponent implements OnInit {

  currentData: any = {
    user_Ename: "",
    user_Aname: "",
    en_jobTitle: "",
    ar_jobTitle: "",
    Telephone: "",
    Extension: "",
    Mobile: "",
    user_email: "",
  };
  message = '';


  constructor(private service: SignatureService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.message = '';
    this.getData(this.route.snapshot.params.id);

  }
  
  getData(id: string): void {
    this.service.get(id)
      .subscribe(
        data => {
          this.currentData = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateSignature(): void {
    this.service.update(this.currentData.id, this.currentData)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteData(): void {
    this.service.delete(this.currentData.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/signature']);
        },
        error => {
          console.log(error);
        });
  }
}

