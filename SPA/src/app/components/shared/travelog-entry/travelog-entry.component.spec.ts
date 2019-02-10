import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelogEntryComponent } from './travelog-entry.component';

describe('TravelogEntryComponent', () => {
  let component: TravelogEntryComponent;
  let fixture: ComponentFixture<TravelogEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelogEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
