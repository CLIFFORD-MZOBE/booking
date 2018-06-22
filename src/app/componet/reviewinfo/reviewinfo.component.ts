import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviewinfo',
  templateUrl: './reviewinfo.component.html',
  styleUrls: ['./reviewinfo.component.css']
})
export class ReviewinfoComponent implements OnInit {
  email:'';
  fname:'';
  room: '';
  contact: '';
  date: '';
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      this.email = params['email'];
      this.fname = params['fname'];
      this.room = params['roomm'];
      this.contact = params['contact'];
      this.date = params['date'];

  
  
 
      
    });
  }
  tohome(){
    this.router.navigate(['Home']);
  }
}
