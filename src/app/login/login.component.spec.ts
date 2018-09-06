import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";


fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let Name: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    Name = fixture.debugElement.query(By.css('input[id=username]'));
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Entering value in input controls', () => {
    let user: any;
    Name.nativeElement.value = "ivan.smirnov@sendfax.io";
    /*component.onFormSubmit.subscribe((value) => user = value);*/
    expect(user.Name).toBeTruthy();
  });

});
