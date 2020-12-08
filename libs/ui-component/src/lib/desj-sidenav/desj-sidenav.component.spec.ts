import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesjSidenavComponent } from './desj-sidenav.component';

describe('DesjSidenavComponent', () => {
  let component: DesjSidenavComponent;
  let fixture: ComponentFixture<DesjSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesjSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesjSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
