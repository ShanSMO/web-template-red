import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.sass']
})
export class StudentListComponent implements OnInit {

  students: any[] = [
    {id: 1, ref_id: 'ST-25552', full_name: 'Shanaka Madushanka', contact_number: 766254532, city: 'Kalutara', image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532, city: 'Deniyaya', image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532, city: 'Deniyaya', image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532, city: 'Deniyaya', image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532, city: 'Deniyaya', image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532, city: 'Deniyaya', image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532, city: 'Deniyaya', image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532, city: 'Deniyaya', image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532, city: 'Deniyaya', image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
