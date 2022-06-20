import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responseMessage = ''



  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmitHandler(data: any){
    this.authService.login(data).subscribe((response)=>{
      console.log(response)
      this.responseMessage = response.message
    },(error)=>{
      console.log(error.error.message)
      this.responseMessage = error.error.message

    })
  }

}
