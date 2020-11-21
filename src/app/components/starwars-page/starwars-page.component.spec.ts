import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsPageComponent } from './starwars-page.component';

describe('StarwarsPageComponent', () => {
  let component: StarwarsPageComponent;
  let fixture: ComponentFixture<StarwarsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarwarsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
