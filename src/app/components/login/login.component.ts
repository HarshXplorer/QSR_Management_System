import { Component } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http'; 
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'] 
}) 
export class LoginComponent { 
  user: User = new User();
  role:string = '';

  
  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) { }
  
  onSubmit(): void { 
    this.userService.logIn(this.user.emailId, this.user.password).subscribe(data=>{
       
        this.user=data;
        
        if (this.user.role ==='admin'){
          localStorage.setItem('user','admin');
          localStorage.setItem('id',""+this.user.id);
          this.router.navigate(['/admin']);
        }
        else{
          localStorage.setItem('id',""+this.user.id);
          localStorage.setItem('user','user');
          this.router.navigate(['/home']); 
        }
      },error => {
        // alert('Check your credentials once. If you are not registered, please register.');
        this.snackBar.open('Check your credentials once. If you are not registered, please register.', 'Dismiss', {
          duration: 4000
        });
      });
        
      }
      
     
  }
