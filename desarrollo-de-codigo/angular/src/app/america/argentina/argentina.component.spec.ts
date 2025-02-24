import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgentinaComponent } from './argentina.component';

describe('ArgentinaComponent', () => {
  let component: ArgentinaComponent;
  let fixture: ComponentFixture<ArgentinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArgentinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
