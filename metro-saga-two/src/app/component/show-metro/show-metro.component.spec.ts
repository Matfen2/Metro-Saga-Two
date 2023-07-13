import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMetroComponent } from './show-metro.component';

describe('ShowMetroComponent', () => {
  let component: ShowMetroComponent;
  let fixture: ComponentFixture<ShowMetroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowMetroComponent]
    });
    fixture = TestBed.createComponent(ShowMetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
