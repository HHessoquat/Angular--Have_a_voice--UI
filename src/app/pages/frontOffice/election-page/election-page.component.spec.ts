import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionPageComponent } from './election-page.component';

describe('ElectionPageComponent', () => {
  let component: ElectionPageComponent;
  let fixture: ComponentFixture<ElectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
