import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharakterePageComponent } from './charaktere-page.component';

describe('CharakterePageComponent', () => {
  let component: CharakterePageComponent;
  let fixture: ComponentFixture<CharakterePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharakterePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharakterePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
