import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwagTestComponent } from './swag-test.component';

describe('SwagTestComponent', () => {
  let component: SwagTestComponent;
  let fixture: ComponentFixture<SwagTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwagTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwagTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
