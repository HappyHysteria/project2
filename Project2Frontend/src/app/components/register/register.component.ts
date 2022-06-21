import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel = new User()

  constructor(private authService:AuthService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.activeRoute.snapshot.paramMap.get("error") == "failure"){
      alert("Invalid registration information")
    }
  }

  onSubmitHandler(){
    console.log(this.userModel)
    this.authService.register(this.userModel).subscribe(response => {
      console.log(response)
      this.route.navigate(['/login'])

    }, (error:HttpErrorResponse)=>{
      if(error.status == 500){
        this.route.navigate(['/register'])
      }
    }
    )
  }

}
