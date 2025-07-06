import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChoiceComponent } from './add-choice.component';

describe('AddChoiceComponent', () => {
  let component: AddChoiceComponent;
  let fixture: ComponentFixture<AddChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
