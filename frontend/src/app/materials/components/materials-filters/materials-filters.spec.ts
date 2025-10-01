import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsFilters } from './materials-filters';

describe('MaterialsFilters', () => {
  let component: MaterialsFilters;
  let fixture: ComponentFixture<MaterialsFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialsFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
