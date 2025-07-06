import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TranslocoPipe} from '@jsverse/transloco';

@Component({
  selector: 'app-add-choice',
  imports: [TranslocoPipe, ReactiveFormsModule],
  templateUrl: './add-choice.component.html',
  styleUrl: './add-choice.component.scss'
})
export class AddChoiceComponent {
  @Input() choice!: FormGroup;
  @Output() removeChoice: EventEmitter<void> = new EventEmitter<void>();

  remove(): void {
    this.removeChoice.emit()
  }
}
