import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequireMatch } from '../requireMatch';
import { Status } from '../status';

@Component({
  selector: 'app-drpdown',
  templateUrl: './drpdown.component.html',
  styleUrls: ['./drpdown.component.css']
})
export class DrpdownComponent implements OnInit {

  form: FormGroup;
  statuses: Status[];

  constructor() {
    this.statuses = [
      new Status("In Development"),
      new Status("Testing"),
      new Status("Training")
    ];
  }

  ngOnInit() {
    this.form = new FormGroup({
      status: new FormControl('', [Validators.required, RequireMatch]),
    });
  }

  displayWith(obj?: any): string | undefined {
    return obj ? obj.name : undefined;
  }

}
