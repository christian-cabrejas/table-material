import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableJsonShowcaseComponentComponent } from './table-json-showcase-component.component';

describe('TableJsonShowcaseComponentComponent', () => {
  let component: TableJsonShowcaseComponentComponent;
  let fixture: ComponentFixture<TableJsonShowcaseComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableJsonShowcaseComponentComponent]
    });
    fixture = TestBed.createComponent(TableJsonShowcaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
