import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() control: FormControl;
  @Input() inputType: string;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showErrors(){
    const {dirty, touched, errors} = this.control;
    return dirty && touched && errors;
  }

}
