import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { DataFormService } from '../../../shared/services/data-form.service';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent {
  infoForm : FormGroup;
  router = inject(Router);
  newsletter : boolean = false;
  acceptPhotoUsage : boolean = false;
  errorMsg : any
  
  constructor(private _fb : FormBuilder,private _dataFormService : DataFormService, private _apiService : ApiService){
    this.infoForm = this._fb.group({
      
      firstName : [null, [Validators.required,Validators.minLength(2)]],
      lastName : [null, [Validators.required]],
      email : [null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      street : [null,Validators.required],
      postCode: [null, [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
      city : [null,Validators.required],
      conditionJeu : [null, Validators.required],
      rgpd : [null, Validators.required],
      newsletter: [this.newsletter],
    })
  }

  onCheckBoxChange(){
    this.newsletter = !this.newsletter;
    // Mettre à jour la valeur du bool dans le formulaire
    this.newsletter = this.infoForm.get('newsletter')?.value;
    console.log(this.infoForm.get('newsletter')?.value);
  }
  getForm(){
      if(this.infoForm.valid && this.acceptPhotoUsage){
        console.log("Le formulaire est valide ! ♥");
        this._dataFormService.addForm(this.infoForm.value)
        this._apiService.createUser(this._dataFormService.mergeData()).subscribe({
          next : (resp) => {
            this._dataFormService.setId(resp.id)
            const file = this._dataFormService.getFile()
            const formPicture = new FormData()
            formPicture.append("file", file, file.name)
            this._apiService.addPicture(resp.id, formPicture).subscribe({
              next : ()=>{
                this.router.navigateByUrl("/thanks");
              },
              error : () => {
                console.log("Image pas envoyée")
              }
            })  
          },
          error : (error) => {
            this.errorMsg = error
            console.log("_apiService.createUser > échec de la requête",error);
          }
        })
      }
      else{
        this.infoForm.markAllAsTouched();
        console.log("Le formulaire n'est pas valide");
      }
  }
  checkState(){
    this.acceptPhotoUsage = !this.acceptPhotoUsage;
  }
}