import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardLecturerComponent } from './board-lecturer.component';

describe('BoardLecturerComponent', () => {
  let component: BoardLecturerComponent;
  let fixture: ComponentFixture<BoardLecturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardLecturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
