import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowcaseComponentComponent } from './table-showcase-component.component';

describe('TableShowcaseComponentComponent', () => {
  let component: TableShowcaseComponentComponent;
  let fixture: ComponentFixture<TableShowcaseComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableShowcaseComponentComponent]
    });
    fixture = TestBed.createComponent(TableShowcaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
