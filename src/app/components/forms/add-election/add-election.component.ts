import {Component, OnInit} from '@angular/core';
import {FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {FormService} from '../../../services/form.service';
import {TranslocoPipe} from '@jsverse/transloco';
import {AddChoiceComponent} from '../add-choice/add-choice.component';

@Component({
  selector: 'app-add-election',
  imports: [TranslocoPipe, ReactiveFormsModule, AddChoiceComponent],
  templateUrl: './add-election.component.html',
  styleUrl: './add-election.component.scss'
})
export class AddElectionComponent implements OnInit{
  form!: FormGroup;

  constructor(private formService: FormService,) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formService.initElectionForm();
  }

  getChoice(): FormArray<FormGroup> {
    return this.form.get('choices') as FormArray<FormGroup>;
  }

  onSubmit() {
    console.log('submitted');
    //TODO
  }

  addChoice() {
    this.formService.addChoice(this.form)
  }

    protected readonly FormGroup = FormGroup;
}
