import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTravelogComponent } from './my-travelog.component';

describe('MyTravelogComponent', () => {
  let component: MyTravelogComponent;
  let fixture: ComponentFixture<MyTravelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTravelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTravelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
