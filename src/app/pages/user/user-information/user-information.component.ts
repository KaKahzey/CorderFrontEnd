import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent {
  registerForm : FormGroup;

  constructor(private _fb : FormBuilder){
    this.registerForm = this._fb.group({})
  }
}
