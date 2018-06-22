import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  email:'';
  fname:'';
  room: '';
  contact: '';
  date: '';
  constructor(private router: Router) { }

  ngOnInit() {
   
  }
  toform(){
    this.router.navigate(['Home/form'])
  };
}
