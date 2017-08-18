import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireWeatherComponent } from './fire-weather.component';

describe('FireWeatherComponent', () => {
  let component: FireWeatherComponent;
  let fixture: ComponentFixture<FireWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
