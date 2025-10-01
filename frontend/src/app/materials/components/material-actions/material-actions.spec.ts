import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialActions } from './material-actions';

describe('MaterialActions', () => {
  let component: MaterialActions;
  let fixture: ComponentFixture<MaterialActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialActions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialActions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
