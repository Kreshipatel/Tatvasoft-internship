import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu1Component } from './menu1.component';

describe('Menu1Component', () => {
  let component: Menu1Component;
  let fixture: ComponentFixture<Menu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
