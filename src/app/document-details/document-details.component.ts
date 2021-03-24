import { AuthenticationServiceService } from './../authentication-service.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit {
  dataList;
  name;
  documentid;
  devicesign;
  back=false;
  front=true;
  frontb;
  backb;
  constructor(private authService:AuthenticationServiceService) { }
backpic(){
  this.back=true;
 //this.front=true
}
frontpic(){
  this.back=false;
}
  ngOnInit(): void {
    this.authService.documentDetails().pipe(take(5)).subscribe((data)=>{
      if(data){
        this.dataList= data
        this.name=this.dataList.data[0].firstName
        this.documentid=this.dataList.data[0].Document_ID
        this.devicesign=this.dataList.data[0].deviceSignature
        this.devicesign=this.devicesign.slice(0,15)
       
        console.log('name',this.name)
         this.dataList=this.dataList.data[0]
         console.log(data)
      }
    
    })
  }

}
