import { Injectable } from '@angular/core';
import {  ParticipantFullForm } from '../models/participantFullForm';
import { ParticipantContactDetails } from '../models/participantContactDetails';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  private file! : File
  private productType : string = ""
  private form : ParticipantContactDetails = {
    firstName : "",
    lastName : "",
    email : "",
    street : "",
    city : "",
    postCode : "",
    newsletter : false
  }
  private user : ParticipantFullForm = {
    firstName : "",
    lastName : "",
    email : "",
    productType : "",
    street : "",
    city : "",
    postCode : "",
    acceptNewsletter : false
  }
  private id : number = 0

  constructor() { }

  

  changeProductType(changedProduct : string) : void {
    this.productType = changedProduct;
  }

  displayProductType() : string{
    return this.productType;
  }

  changeFile(file : File) : void{
    this.file = file
  }
  
  getFile() : File{
    return this.file
  }

  addForm(form : ParticipantContactDetails) : void {
    this.form = form
  }

  mergeData() : ParticipantFullForm {
    this.user = {
      firstName : this.form.firstName,
      lastName : this.form.lastName,
      email : this.form.email,
      productType : this.productType,
      street : this.form.street,
      city : this.form.city,
      postCode : this.form.postCode,
      acceptNewsletter : this.form.newsletter
    }
    return this.user
  }

  getId() : number{
   return this.id
  }

  setId(id : number) : void {
    this.id = id
  }
}
