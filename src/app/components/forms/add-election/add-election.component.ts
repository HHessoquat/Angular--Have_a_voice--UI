import {Component, OnInit} from '@angular/core';
import {FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {FormService} from '../../../services/form.service';
import {TranslocoPipe} from '@jsverse/transloco';
import {AddChoiceComponent} from '../add-choice/add-choice.component';
import {take, tap} from 'rxjs';
import ApiResponse from '../../../models/ApiResponse';
import Election from '../../../models/Election';

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
    this.formService.submitElection(this.form).pipe(
      take(1),
      tap((code: string) => {
        console.log(code);
      })
    ).subscribe()
  }

  addChoice() {
    this.formService.addChoice(this.form)
  }

    protected readonly FormGroup = FormGroup;

  removeChoice(index: number) {
    this.formService.removeChoice(this.form, index)
  }
}
