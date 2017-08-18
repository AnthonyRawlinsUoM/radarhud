import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumeRadarComponent } from './plume-radar.component';

describe('PlumeRadarComponent', () => {
  let component: PlumeRadarComponent;
  let fixture: ComponentFixture<PlumeRadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlumeRadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumeRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
