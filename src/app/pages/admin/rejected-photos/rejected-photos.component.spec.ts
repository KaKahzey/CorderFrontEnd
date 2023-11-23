import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedPhotosComponent } from './rejected-photos.component';

describe('RejectedPhotosComponent', () => {
  let component: RejectedPhotosComponent;
  let fixture: ComponentFixture<RejectedPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejectedPhotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RejectedPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
