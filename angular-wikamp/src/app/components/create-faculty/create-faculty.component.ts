import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/models/faculty';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-faculty',
  templateUrl: './create-faculty.component.html',
  styleUrls: ['./create-faculty.component.css']
})
export class CreateFacultyComponent implements OnInit {

  faculty: Faculty = new Faculty();
  submitted = false;

  constructor(private adminService: AdminService,
              private router: Router) { }

  ngOnInit(): void {
  }

  newFaculty(): void {
    this.submitted = false;
    this.faculty = new Faculty();
  }

  save() {
    this.adminService.createFaculty(this.faculty)
    .subscribe(data => console.log(data), error => console.log(error));
    this.faculty = new Faculty();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/admin']);
  }

}
