import { Component, OnInit } from '@angular/core';
import { LecturerService } from 'src/app/services/lecturer.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-board-lecturer',
  templateUrl: './board-lecturer.component.html',
  styleUrls: ['./board-lecturer.component.css']
})
export class BoardLecturerComponent implements OnInit {
  content = '';
  permaLink: number;
  students: Student[];

  constructor(private lecturerService: LecturerService) { }

  

  ngOnInit(): void {
    this.lecturerService.getStudents().toPromise().then((value) => this.students = value);
    console.log(this.students);
  }


}
