import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaxrecordComponent } from './faxrecord.component';

describe('FaxrecordComponent', () => {
  let component: FaxrecordComponent;
  let fixture: ComponentFixture<FaxrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaxrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaxrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
