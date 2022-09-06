import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeHomeComponent } from './je-home.component';

describe('JeHomeComponent', () => {
  let component: JeHomeComponent;
  let fixture: ComponentFixture<JeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
