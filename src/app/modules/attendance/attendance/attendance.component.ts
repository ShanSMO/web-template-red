import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.sass']
})
export class AttendanceComponent implements OnInit {

  grades: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  subjects: any[] = [
    {level_id: 1 , name: 'GCE A/L', all_subjects: [{stream_id: 1, stream_name: 'Science', related_subjects: [{id: 1, name: 'Physics'}]}]},
    {level_id: 2, name: 'GCE O/L', all_subjects: [{id: 1, name: 'Mathematics'}, {id: 1, name: 'History'}]},
    {level_id: 3, name: 'Other', all_subjects: []}
  ];

  syllubusStreams: any[] = [
    {stream_id: 1, stream_name: 'Science'},
    {stream_id: 2, stream_name: 'Maths'},
    {stream_id: 3, stream_name: 'Art'},
    {stream_id: 4, stream_name: 'Commerce'},
    {stream_id: 4, stream_name: 'Technical'}
  ];

  academicLevels: any[] = [
    {level_id: 1 , name: 'GCE A/L'},
    {level_id: 2 , name: 'GCE O/L'},
    {level_id: 3 , name: 'Other'}
  ];

  studentAttendances: any[] = [
    {id: 1, name: 'Shanaka Madushanka', ref_id: 'ST-2018-SC-00001', subject: 'Physics', att_status: 'ATTENDED'},
    {id: 2, name: 'Nalaka Sampath', ref_id: 'ST-2018-SC-00001', subject: 'Chemistry', att_status: 'ABSENCED'},
    {id: 3, name: 'Kasun Chamara', ref_id: 'ST-2018-SC-00001', subject: 'Econ', att_status: 'ATTENDED'},
    {id: 4, name: 'Sameera Udayanga', ref_id: 'ST-2018-SC-00001', subject: 'N/A', att_status: 'ATTENDED'},
    {id: 5, name: 'Irosh Madushan', ref_id: 'ST-2018-SC-00001', subject: 'BS', att_status: 'ABSENCED'},
    {id: 6, name: 'Amarabandu Rupasinghe', ref_id: 'ST-2018-SC-00001', subject: 'BS', att_status: 'ABSENCED'},
    {id: 7, name: 'Asad Saali', ref_id: 'ST-2018-SC-00001', subject: 'BS', att_status: 'ATTENDED'},
    {id: 7, name: 'Asad Saali', ref_id: 'ST-2018-SC-00001', subject: 'BS', att_status: 'ATTENDED'},
    {id: 7, name: 'Asad Saali', ref_id: 'ST-2018-SC-00001', subject: 'BS', att_status: 'ATTENDED'},
    {id: 7, name: 'Asad Saali', ref_id: 'ST-2018-SC-00001', subject: 'BS', att_status: 'ATTENDED'},
    {id: 7, name: 'Asad Saali', ref_id: 'ST-2018-SC-00001', subject: 'BS', att_status: 'ATTENDED'},
    {id: 7, name: 'Asad Saali', ref_id: 'ST-2018-SC-00001', subject: 'BS', att_status: 'ATTENDED'},
    {id: 7, name: 'Asad Saali', ref_id: 'ST-2018-SC-00001', subject: 'BS', att_status: 'ABSENCED'},
    {id: 7, name: 'Asad Saali', ref_id: 'ST-2018-SC-00001', subject: 'BS', att_status: 'ABSENCED'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
