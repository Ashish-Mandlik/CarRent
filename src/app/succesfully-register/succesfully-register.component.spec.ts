import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfullyRegisterComponent } from './succesfully-register.component';

describe('SuccesfullyRegisterComponent', () => {
  let component: SuccesfullyRegisterComponent;
  let fixture: ComponentFixture<SuccesfullyRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccesfullyRegisterComponent]
    });
    fixture = TestBed.createComponent(SuccesfullyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
