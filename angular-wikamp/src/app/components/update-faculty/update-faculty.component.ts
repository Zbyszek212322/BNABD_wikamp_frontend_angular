import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/models/faculty';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-faculty',
  templateUrl: './update-faculty.component.html',
  styleUrls: ['./update-faculty.component.css']
})
export class UpdateFacultyComponent implements OnInit {

  id: number;
  faculty: Faculty;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private adminService: AdminService) { }

  ngOnInit(): void {
    this.faculty = new Faculty();

    this.id = this.route.snapshot.params['id'];

    this.adminService.getFaculty(this.id)
    .subscribe(data => {
      console.log(data)
      this.faculty = data;
    }, error => console.log(error));
  }

  updateFaculty() {
    this.adminService.updateFaculty(this.id, this.faculty)
    .subscribe(data => console.log(data), error => console.log(error));
    this.faculty = new Faculty();
    this.goToList();
  }

  onSubmit() {
    this.updateFaculty();
  }

  goToList() {
    this.router.navigate(['/admin']);
  }

}
