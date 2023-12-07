import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Renderer2 } from '@angular/core';
import { ɵDomRendererFactory2 } from '@angular/platform-browser';
import { ApiService } from '../../../shared/services/api.service';
import { DataFormService } from '../../../shared/services/data-form.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.scss'
})
export class ThanksComponent {
  
  private statePopup: string[] = ['none','block'];
  
  isChecked1 = false;
  isChecked2 = false;
  isChecked3 = false;

  isOpaque : boolean = true;

  texteAreaContenu: string = '';
  previousLength: number = 0;

  private satisfaction : number = 0;
  private messages: string = '';
  
  @ViewChild('myModal', { static: false }) modal: ElementRef<HTMLElement> | null = null;
  private renderer: Renderer2;

  constructor(private rendererFactory: ɵDomRendererFactory2, private _ApiService : ApiService ,private _DataForm : DataFormService ){
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }
  
  
  ngOnInit(): void {
    
    const popup0 = document.getElementById('popup0');
    if(popup0){
      popup0.style.display = 'block';
    }
    
    const popup1 = document.getElementById('popup1');
    if(popup1){
      popup1.style.display = 'none';
    }
    
    const popup2 = document.getElementById('popup2');
    if(popup2){
      popup2.style.display = 'none';
    }
    
    const popup3 = document.getElementById('popup3');
    if(popup3){
      popup3.style.display = 'none';
    }
  }
  
  changeState(popupID : string) {
    const popup = document.getElementById(popupID);
    if(popup){
      if(this.statePopup[0] == popup.style.display){
        popup.style.display = this.statePopup[1];
        console.log(popup.style.display);
        if(popupID == 'popup3'){
          this.sendOpinion()
          setTimeout(() => {
            this.changeState(popupID);
          }, 5000);
        }
      }
      else{
        if(popupID != 'popup1' || this.isChecked2 == false && this.isChecked3 == false){
          popup.style.display = this.statePopup[0];
          if(popupID == 'popup3'){
            this.removeOpacity();
          }
        }
      }
    }
  }
  sendOpinion(){
    this.satisfaction = this.defineSatisfaction();
    this._DataForm.setOpinion(this.satisfaction, this.messages);
    console.log(this.messages);
    console.log(this.satisfaction);
    this._ApiService.sendOpinion(this._DataForm.getOpinion()).subscribe({
      next : (resp) => {
        console.log("youpi");
        
      },
      error : (error) => {
        console.log("probleme",error);
        
      }
    })
  }
  
  defineSatisfaction():number { 
    if(this.isChecked1){
        return 1;
    }
    else if(this.isChecked2){
      return 2;
    }
    else{
      return 3;
    }
  }
  
  checkboxChange1(){
    this.isChecked1 = !this.isChecked1;
    if(this.isChecked2 == true){
      this.isChecked2 = !this.isChecked2;
    }
    else if(this.isChecked3 == false){
      this.isChecked3 = !this.isChecked3;
    }

  }
  checkBoxChange2(){
    this.isChecked2 = !this.isChecked2
    if(this.isChecked3 == true){
      this.isChecked3 = !this.isChecked3;
    }
    this.changeState('popup1')
  }
  
  checkBoxChange3(){
    this.isChecked3 = !this.isChecked3
    if(this.isChecked2 != false){
      this.isChecked2 = !this.isChecked2
    }
    this.changeState('popup1')
  }
  
  sendMessage(text: string) {
    if (text.trim() !== '') {
      this.messages = text;
      console.log(this.messages);
      
    }
  }
  
  closeModal() {
    console.log("CloseModal called");
    this.removeOpacity();
    if (this.modal) {
      console.log("Modal found, changing style");
      this.renderer.setStyle(this.modal.nativeElement, 'display', 'none');
    }
  }

  removeOpacity(){
    this.isOpaque = false;
  }

  limiterCaracteres() {
    const limiteCaracteres = 120;
    if (this.texteAreaContenu.length > limiteCaracteres) {
      // Ne raccourcir que si l'utilisateur ajoute du texte, pas s'il le supprime
      if (this.texteAreaContenu.length > this.previousLength) {
        this.texteAreaContenu = this.texteAreaContenu.substring(0, limiteCaracteres);
      }
    }
    this.previousLength = this.texteAreaContenu.length;
  }
}

