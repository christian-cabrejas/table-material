import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowcasePageComponent } from './table-showcase-page.component';

describe('TableShowcasePageComponent', () => {
  let component: TableShowcasePageComponent;
  let fixture: ComponentFixture<TableShowcasePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableShowcasePageComponent]
    });
    fixture = TestBed.createComponent(TableShowcasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
