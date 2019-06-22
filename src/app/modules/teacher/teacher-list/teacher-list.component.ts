import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.sass']
})
export class TeacherListComponent implements OnInit {

  teachers: any[] = [
    {id: 1, ref_id: 'ST-25552', full_name: 'Shanaka Madushanka', contact_number: 766254532, image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532,  image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532,  image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532,  image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532,  image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532,  image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532,  image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532,  image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'},
    {id: 2, ref_id: 'ST-02322', full_name: 'Osmali Sandamini', contact_number: 766254532,  image_url: 'http://192.168.1.1:8080/aaa/mn.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
