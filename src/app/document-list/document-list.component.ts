import { AuthenticationServiceService } from './../authentication-service.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
dataList;
arr;
  constructor(private authService: AuthenticationServiceService) { }
sendid(doc){
  this.authService.apithree=doc.Document_ID._id

}

  ngOnInit(): void {
  this.authService.documentList().pipe(take(1)).subscribe((data)=>{
    this.dataList=data
    this.dataList=this.dataList.data
    
    console.log(this.dataList)
  })
 
    
  }

}
