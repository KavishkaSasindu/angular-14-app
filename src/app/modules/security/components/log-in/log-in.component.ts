import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email:string ="";
  password:string = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logIn(){
    console.log(this.email,this.password);

    if(this.email === 'h@gmail.com' && this.password === '123456'){
      this.router.navigateByUrl('/console').then(()=>{
        alert("LogIn success")
      })
    }else{
      alert("Invalid Credentials")
    }
  }

}
