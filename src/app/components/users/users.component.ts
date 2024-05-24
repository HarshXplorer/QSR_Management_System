import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  user: User = new User();
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'), // Only alphabets and spaces are allowed
      ]),
      mobileNo: new FormControl(this.user.mobileNo, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'), // Exactly 10 digits are allowed
      ]),
      emailId: new FormControl(this.user.emailId, [
        Validators.required,
        Validators.email, // Validates if the input is a valid email
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.pattern(
          '^(?=.*[A-Z\\d!@#$%^&*()_+\\-=\\[\\]{};:"\\\\|,.<>\\/?]).[a-zA-Z\\d!@#$%^&*()_+\\-=\\[\\]{};:"\\\\|,.<>\\/?]{8,}$'
        ),
        // At least one uppercase letter and one digit
      ]),
      address: new FormControl(this.user.address, [Validators.required]),
      city: new FormControl(this.user.city, [Validators.required]),
      state: new FormControl(this.user.state, [Validators.required]),
      pinCode: new FormControl(this.user.pinCode, [
        Validators.required,
        Validators.pattern('^[1-9][0-9]{5}$'), // Pin code should be a 6-digit number
      ]),
      addressType: new FormControl(this.user.addressType, [
        Validators.required,
      ]),
      role: new FormControl(this.user.role, [Validators.required]),
    });
  }

  // newUser() {
  // if (this.userForm.valid) {
  //   // Create a new User object with the form values
  //   const newUser: User = this.userForm.value;

  //   this.userService.createNewUser(newUser).subscribe(data => {
  //     console.log(data);
  //     // alert('Your account created successfully');
  //     this.snackBar.open('Your account created successfully', 'Dismiss', {
  //       duration: 4000
  //     });
  //     this.router.navigate(['']);
  //   })
  // } else {
  //   // alert('Please fill all the required fields correctly');
  //   this.snackBar.open('Please fill all the required fields correctly', 'Dismiss', {
  //     duration: 4000
  //   });
  // }
  // }
  newUser() {
    if (this.userForm.valid) {
      // Create a new User object with the form values
      const newUser: User = this.userForm.value;
      this.userService.createNewUser(newUser).subscribe(
        (data) => {
          console.log(data);
          this.snackBar.open('Your account created successfully', 'Dismiss', {
            duration: 4000,
          });
          this.router.navigate(['']);
        },
        (error) => {
          if (error.error.message === 'User Already registered') {
            this.snackBar.open(
              'The email ID or the phone number has already been registered. Please try with another email or phone number.',
              'Dismiss',
              {
                duration: 6000,
              }
            );
          } else {
            this.snackBar.open('Please fill all the required fields correctly', 'Dismiss', {
              duration: 4000
            });
          }
        }
      );
    }
  }
  
}
