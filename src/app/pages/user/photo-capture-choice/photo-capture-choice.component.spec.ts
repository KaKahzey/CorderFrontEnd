import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCaptureChoiceComponent } from './photo-capture-choice.component';

describe('PhotoCaptureChoiceComponent', () => {
  let component: PhotoCaptureChoiceComponent;
  let fixture: ComponentFixture<PhotoCaptureChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoCaptureChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoCaptureChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
