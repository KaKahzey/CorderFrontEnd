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
      email : [null,[Validators.required,Validators.pattern(/^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)]],
      adresse : [null,Validators.required],
      postal : [null,Validators.required],
      town : [null,Validators.required]
    })
  }

  sendForm(){
    if(this.infoForm.valid){
      console.log("formulaire valide");

      // this._swaggerService.login(this.infoForm.value).subscribe({
      //   //rep est de type userToken car c est le type du return de login
      //   next : (rep) => {
      //     console.log("bien connecte",rep);
      //     localStorage.setItem("myToken",rep.token)
      //     localStorage.setItem("userId",rep.member.id.toString())
      //     this.router.navigateByUrl("")
      //   },
      //   error : (error) => {
      //     console.log("probleme de login")
      //       // si probleme de login alors on change l etat du boolean pour signaler une mauvaise combinaison pseudo|mdp
      //     if(this.isCorrect){
      //       this.isCorrect = !this.isCorrect;
      //     }
      //   }
      // })
    }
    else{
      this.infoForm.markAllAsTouched();
      console.log("formulaire pas valide");
    }
  }
}
