import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {AuthServiceService} from "../../../shared/services/auth-service.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email:string ="";
  password:string = "";

  constructor(private router:Router,private authService:AuthServiceService) { }

  ngOnInit(): void {

    if(this.authService.isExistToken('my-token')){
      this.router.navigateByUrl('/console').then(()=>{
        console.log(true)
      })
    }
  }

  logIn(){
    console.log(this.email,this.password);

    if(this.email === 'h@gmail.com' && this.password === '123456'){
      this.authService.createToken(this.email);
      this.router.navigateByUrl('/console').then(()=>{
        alert("Successfully LogIn");
      });

    }else{
      alert("Invalid Credentials")
    }
  }

}
