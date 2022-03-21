import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtOrDComponent } from './at-or-d.component';

describe('AtOrDComponent', () => {
  let component: AtOrDComponent;
  let fixture: ComponentFixture<AtOrDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtOrDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtOrDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
