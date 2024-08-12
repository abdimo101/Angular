import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required]
      }),
      phoneNumbers: this.fb.array([
        this.fb.control('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      ])
    });
  }

  get phoneNumbers() {
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  addPhoneNumber() {
    this.phoneNumbers.push(this.fb.control('', [Validators.required, Validators.pattern('^[0-9]{10}$')]));
  }

  submitForm() {
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }}
}
