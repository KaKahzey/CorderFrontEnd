import { Injectable } from '@angular/core';
import {  ParticipantFullForm } from '../models/participantFullForm';
import { ParticipantContactDetails } from '../models/participantContactDetails';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  blob : string = ""
  productType : string = ""
  form : ParticipantContactDetails = {
    firstName : "",
    lastName : "",
    email : "",
    street : "",
    city : "",
    postCode : "",
    newsletter : false
  }
  user : ParticipantFullForm = {
    firstName : "",
    lastName : "",
    email : "",
    blob : "", 
    productType : "",
    street : "",
    city : "",
    postCode : "",
    acceptNewsletter : false
  }
  id : number = 0

  constructor() { }

  changeProductType(changedProduct : string) : void {
    this.productType = changedProduct;
  }

  displayProductType() : string{
    return this.productType;
  }
  
  addForm(form : ParticipantContactDetails) : void {
    this.form = form
  }

  mergeData() : ParticipantFullForm {
    this.user = {
      firstName : this.form.firstName,
      lastName : this.form.lastName,
      email : this.form.email,
      blob : this.blob, 
      productType : this.productType,
      street : this.form.street,
      city : this.form.city,
      postCode : this.form.postCode,
      acceptNewsletter : this.form.newsletter
    }
    return this.user
  }

  getId(id : number) : void {
    this.id = id
  }
}
