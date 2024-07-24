import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFeatureComponent } from './fun-feature.component';

describe('FunFeatureComponent', () => {
  let component: FunFeatureComponent;
  let fixture: ComponentFixture<FunFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
