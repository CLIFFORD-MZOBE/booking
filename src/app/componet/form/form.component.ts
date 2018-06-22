import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  email:'';
  fname:'';
  room: '';
  contact: '';
  date: '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  toreview(){
    this.router.navigate(['reviewinfo'], {queryParams:{email:this.email, fname:this.fname, roomm:this.room, contact:this.contact, date:this.date}});
  }
}
