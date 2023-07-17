import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowModalComponent } from './show-modal.component';

describe('ShowModalComponent', () => {
  let component: ShowModalComponent;
  let fixture: ComponentFixture<ShowModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowModalComponent]
    });
    fixture = TestBed.createComponent(ShowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
