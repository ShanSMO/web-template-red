import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.sass']
})
export class StudentRegistrationComponent implements OnInit {

  subjectList: any = {
    eligible: [
      {id: 1, name: 'Sinhala'},
      {id: 2, name: 'English'},
      {id: 3, name: 'Tamil'},
      {id: 3, name: 'Buddhism'},
      {id: 3, name: 'Political Science'},
      {id: 3, name: 'Maths'},
      {id: 3, name: 'Art'},
      {id: 3, name: 'Geography'}
    ],
    selected: [
      {id: 4, name: 'Physics'},
      {id: 5, name: 'Chemistry'},
      {id: 6, name: 'Biology'}
    ]
  };

  studentForm: FormGroup = new FormGroup({
    academicArea: new FormControl('null')
  });

  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log(this.studentForm.get('academicArea').value);
  }

}
