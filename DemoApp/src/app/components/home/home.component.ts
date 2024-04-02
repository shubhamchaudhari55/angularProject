import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, NavbarComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      age: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      address: new FormControl(),
      subscribe: new FormControl()
    })

  }

  onSubmit(){
    console.log(this.userForm.value);
    
  }

  onCancel(){
    this.userForm.reset();
  }

}
