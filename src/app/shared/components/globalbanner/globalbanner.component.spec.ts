import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalbannerComponent } from './globalbanner.component';

describe('GlobalbannerComponent', () => {
  let component: GlobalbannerComponent;
  let fixture: ComponentFixture<GlobalbannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalbannerComponent]
    });
    fixture = TestBed.createComponent(GlobalbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
