import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responseMessage = ''
  constructor(public authService: AuthService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.activeRoute.snapshot.paramMap.get("error") == "failure"){
      alert("Invalid login information")
    }
  }

  onSubmitHandler(data: any){
    this.authService.login(data).subscribe((response)=>{
      console.log(response)
      this.responseMessage = response.message

      this.route.navigate(['/home'])
    },(error)=>{
      console.log(error.error.message)
      this.responseMessage = error.error.message
      this.route.navigate(['/login'])
    })
  }

}
