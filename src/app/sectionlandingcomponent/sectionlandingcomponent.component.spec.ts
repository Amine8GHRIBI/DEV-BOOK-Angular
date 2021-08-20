import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionlandingcomponentComponent } from './sectionlandingcomponent.component';

describe('SectionlandingcomponentComponent', () => {
  let component: SectionlandingcomponentComponent;
  let fixture: ComponentFixture<SectionlandingcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionlandingcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionlandingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
