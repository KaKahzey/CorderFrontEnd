import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {Renderer2} from '@angular/core';
import { ɵDomRendererFactory2 } from '@angular/platform-browser';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.scss'
})
export class ThanksComponent {
  
  private statePopup: string[] = ['none','block'];
  
  
  isChecked1 = false;
  isChecked2 = false;
  isChecked3 = false;
  
  @ViewChild('myModal', { static: false }) modal: ElementRef<HTMLElement> | null = null;
  private renderer: Renderer2;

  constructor(private rendererFactory: ɵDomRendererFactory2){
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }
  
  messages: string[] = [];
  
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
          setTimeout(() => {
            this.changeState(popupID);
            console.log(this.isChecked1);
            console.log(this.isChecked2);
            console.log(this.isChecked3);
          }, 5000);
        }
      }
      else{
        if(popupID != 'popup1' || this.isChecked2 == false && this.isChecked3 == false){
          popup.style.display = this.statePopup[0];
        }
      }
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
      this.messages.push(text);
    }
  }
  
  closeModal() {
    console.log("CloseModal called");
    if (this.modal) {
      console.log("Modal found, changing style");
      this.renderer.setStyle(this.modal.nativeElement, 'display', 'none');
    }
  }

}

