import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManagementsComponent } from './home-managements.component';

describe('HomeManagementsComponent', () => {
  let component: HomeManagementsComponent;
  let fixture: ComponentFixture<HomeManagementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeManagementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeManagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
