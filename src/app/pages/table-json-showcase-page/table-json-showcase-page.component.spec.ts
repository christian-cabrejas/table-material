import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableJsonShowcasePageComponent } from './table-json-showcase-page.component';

describe('TableJsonShowcasePageComponent', () => {
  let component: TableJsonShowcasePageComponent;
  let fixture: ComponentFixture<TableJsonShowcasePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableJsonShowcasePageComponent]
    });
    fixture = TestBed.createComponent(TableJsonShowcasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
