import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
@Input() name;
@Input() page;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigator(){
    if (this.name === 'Home'){
      this.router.navigate(['Home']);
    }else if (this.name === 'Contact'){
      this.router.navigate(['Home/Contact']);
  }else if  (this.name === 'About'){
    this.router.navigate(['Home//About']);
}
}}
