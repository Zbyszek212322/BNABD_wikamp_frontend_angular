import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/services/faculty.service';
import { Faculty } from 'src/app/common/faculty';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {

  faculties: Faculty[];

  constructor(private facultyService: FacultyService) { }

  ngOnInit() {
    this.listFaculties();
  }

  listFaculties() {
    this.facultyService.getFacultyList().subscribe(
      data => {
        this.faculties = data;
      }
    )
  }
}
