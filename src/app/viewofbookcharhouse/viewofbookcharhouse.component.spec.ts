import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewofbookcharhouseComponent } from './viewofbookcharhouse.component';

describe('ViewofbookcharhouseComponent', () => {
  let component: ViewofbookcharhouseComponent;
  let fixture: ComponentFixture<ViewofbookcharhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewofbookcharhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewofbookcharhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
