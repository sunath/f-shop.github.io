import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonaliSectionComponent } from './testimonali-section.component';

describe('TestimonaliSectionComponent', () => {
  let component: TestimonaliSectionComponent;
  let fixture: ComponentFixture<TestimonaliSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonaliSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonaliSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
