import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedPhotosComponent } from './validated-photos.component';

describe('ValidatedPhotosComponent', () => {
  let component: ValidatedPhotosComponent;
  let fixture: ComponentFixture<ValidatedPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidatedPhotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidatedPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
