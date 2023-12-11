import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowPopupService {

  private id : number = 0
  
  isDisplayed : boolean = false

constructor() {}
  
  togglePopup() {
    this.isDisplayed = !this.isDisplayed
  }
  
  getState() : boolean {
    return this.isDisplayed
  }

  setId(id : number) : void {
    this.id = id
  }
  
  getId() : number {
    return this.id
  }
}
