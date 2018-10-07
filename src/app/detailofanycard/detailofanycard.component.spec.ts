import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailofanycardComponent } from './detailofanycard.component';

describe('DetailofanycardComponent', () => {
  let component: DetailofanycardComponent;
  let fixture: ComponentFixture<DetailofanycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailofanycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailofanycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
