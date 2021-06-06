import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrainsComponent } from './list-trains.component';

describe('ListTrainsComponent', () => {
  let component: ListTrainsComponent;
  let fixture: ComponentFixture<ListTrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
