import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordstableComponent } from './recordstable.component';

describe('RecordstableComponent', () => {
  let component: RecordstableComponent;
  let fixture: ComponentFixture<RecordstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
