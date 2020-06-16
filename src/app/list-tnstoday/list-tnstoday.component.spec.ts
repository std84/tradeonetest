/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListTnstodayComponent } from './list-tnstoday.component';

describe('ListTnstodayComponent', () => {
  let component: ListTnstodayComponent;
  let fixture: ComponentFixture<ListTnstodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTnstodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTnstodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
