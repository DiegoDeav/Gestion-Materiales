import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialStatusBadge } from './material-status-badge';

describe('MaterialStatusBadge', () => {
  let component: MaterialStatusBadge;
  let fixture: ComponentFixture<MaterialStatusBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialStatusBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialStatusBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
