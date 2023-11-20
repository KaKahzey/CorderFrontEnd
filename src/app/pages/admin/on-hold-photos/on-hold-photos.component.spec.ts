import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnHoldPhotosComponent } from './on-hold-photos.component';

describe('OnHoldPhotosComponent', () => {
  let component: OnHoldPhotosComponent;
  let fixture: ComponentFixture<OnHoldPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnHoldPhotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnHoldPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
