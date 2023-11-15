import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent {
  infoForm : FormGroup;

  constructor(private _fb : FormBuilder){
    this.infoForm = this._fb.group({
      
      firstName : [null, [Validators.required,Validators.minLength(2)]],
      lastName : [null, [Validators.required]],
      email : [null,[Validators.required]],
      adresse : [null,Validators.required],
      postal : [null,Validators.required],
      town : [null,Validators.required]
      
    })
  }
}
