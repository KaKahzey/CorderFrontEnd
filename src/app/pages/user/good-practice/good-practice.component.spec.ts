import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodPracticeComponent } from './good-practice.component';

describe('GoodPracticeComponent', () => {
  let component: GoodPracticeComponent;
  let fixture: ComponentFixture<GoodPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodPracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
