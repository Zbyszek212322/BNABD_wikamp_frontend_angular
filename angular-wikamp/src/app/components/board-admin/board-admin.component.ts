import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { Faculty } from 'src/app/models/faculty';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  faculties: Observable<Faculty[]>;
  mySubscription: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.faculties = this.adminService.getFaculties();
  }

  deleteFaculty(id: number){
    this.adminService.deleteFaculty(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

}
