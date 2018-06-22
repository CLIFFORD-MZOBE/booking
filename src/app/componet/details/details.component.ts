import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  email:string
  fname: string
  room: string
  contact: string
  date: string


  constructor(private router: Router) { }

  ngOnInit() {
  }
    tohome(){
      this.router.navigate(['Home']);
    }
}
