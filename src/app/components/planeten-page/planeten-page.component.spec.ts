import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetenPageComponent } from './planeten-page.component';

describe('PlanetenPageComponent', () => {
  let component: PlanetenPageComponent;
  let fixture: ComponentFixture<PlanetenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
