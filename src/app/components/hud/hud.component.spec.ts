import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HudComponent } from './hud.component';

describe('HudComponent', () => {
  let component: HudComponent;
  let fixture: ComponentFixture<HudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
