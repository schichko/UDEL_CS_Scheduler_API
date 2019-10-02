import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationDropdownComponent } from './concentration-dropdown.component';

describe('ConcentrationDropdownComponent', () => {
  let component: ConcentrationDropdownComponent;
  let fixture: ComponentFixture<ConcentrationDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcentrationDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentrationDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
