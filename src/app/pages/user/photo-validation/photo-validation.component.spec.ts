import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoValidationComponent } from './photo-validation.component';

describe('PhotoValidationComponent', () => {
  let component: PhotoValidationComponent;
  let fixture: ComponentFixture<PhotoValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoValidationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
