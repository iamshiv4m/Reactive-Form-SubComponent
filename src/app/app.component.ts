import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'reactive-sub-form';
  userForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        firstName: [],
        lastName: [],
        email: [],
      }),
      address: this.fb.group({
        street: [],
        number: [],
        postal: [],
        company: [],
      }),
    });
  }
}
