import {Component, OnInit} from '@angular/core';
import {TranslocoDirective, TranslocoPipe} from '@jsverse/transloco';
import {ApiService} from '../../services/api.service';
import {Observable} from 'rxjs';
import ApiResponse from '../../models/ApiResponse';
import Election from '../../models/Election';
import {AsyncPipe} from '@angular/common';
import {Businesscode} from '../../shared/constants/Businesscode';
import {LoginFormComponent} from '../../components/forms/login-form/login-form.component';


@Component({
  selector: 'app-landing-page',
  imports: [TranslocoPipe,AsyncPipe],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  res!: Observable<ApiResponse<Election[]>>
  constructor(private api: ApiService) {
  }
  ngOnInit() {
    this.res = this.api.getAllElections();
  }

  protected readonly Businesscode = Businesscode;
}
