import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';
import { Faculty } from 'src/app/models/faculty';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private publicService: PublicService) { }

  faculties: Faculty[];

  ngOnInit(): void {
    this.publicService.getPublicContent().toPromise().then((value) => this.faculties = value);
    console.log(this.faculties);
  }

}
