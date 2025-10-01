import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsTable } from './materials-table';

describe('MaterialsTable', () => {
  let component: MaterialsTable;
  let fixture: ComponentFixture<MaterialsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
