import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormService} from '../../../services/form.service';
import {TranslocoPipe} from '@jsverse/transloco';

@Component({
  selector: 'app-add-election',
  imports: [TranslocoPipe],
  templateUrl: './add-election.component.html',
  styleUrl: './add-election.component.scss'
})
export class AddElectionComponent {
  form!: FormGroup;

  constructor(private formService: FormService,) {
  }
  initForm() {
  }
}
