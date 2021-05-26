import { Component, OnInit } from '@angular/core';
import { SignatureService } from 'src/app/services/signature.service';

@Component({
  selector: 'app-signature-list',
  templateUrl: './signature-list.component.html',
  styleUrls: ['./signature-list.component.css']
})
export class SignatureListComponent implements OnInit {

  signature?: any[];
  currentSignature?: any;
  currentIndex = -1;
  Fullname = '';

  constructor(private service: SignatureService) { }

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData(): void {
    this.service.getAll()
      .subscribe(
        data => {
          this.signature = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveData();
    this.currentSignature = undefined;
    this.currentIndex = -1;
  }

  setActiveData(signature: any, index: number): void {
    this.currentSignature = signature;
    this.currentIndex = index;
  }

  removeAllData(): void {
    this.service.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.service.findByName(this.Fullname)
      .subscribe(
        data => {
          this.signature = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
