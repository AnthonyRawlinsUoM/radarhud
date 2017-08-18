import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumeChangeComponent } from './plume-change.component';

describe('PlumeChangeComponent', () => {
  let component: PlumeChangeComponent;
  let fixture: ComponentFixture<PlumeChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlumeChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
