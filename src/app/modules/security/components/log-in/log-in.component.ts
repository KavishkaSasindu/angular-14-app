import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {AuthServiceService} from "../../../shared/services/auth-service.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email:string ="";
  password:string = "";

  constructor(private router:Router,private authService:AuthServiceService,private title:Title) { }

  ngOnInit(): void {

    if(this.authService.isExistToken('my-token')){
      this.title.setTitle('Console | Dashboard ');
      this.router.navigateByUrl('/console').then(()=>{
        console.log(true)
      })
    }else{
      this.title.setTitle('Security | logIn')
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
