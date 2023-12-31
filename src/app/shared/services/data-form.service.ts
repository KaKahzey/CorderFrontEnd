import { Injectable } from '@angular/core';
import {  ParticipantFullForm } from '../models/user/participantFullForm';
import { ParticipantContactDetails } from '../models/user/participantContactDetails';
import { Opinion } from '../models/user/opinion';

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
    newsletter : false,
    exposure : false
  }
  private user : ParticipantFullForm = {
    firstName : "",
    lastName : "",
    email : "",
    productType : "",
    status : "PENDING",
    street : "",
    city : "",
    postCode : "",
    acceptNewsletter : false,
    acceptExposure : false,
  }
  private id : number = 0

  private opinion : Opinion = {
    id : this.getId(),
    satisfaction : 3,
    satisfactionComment : ""
  }

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
      status : "PENDING",
      productType : this.productType,
      street : this.form.street,
      city : this.form.city,
      postCode : this.form.postCode,
      acceptNewsletter : this.form.newsletter,
      acceptExposure : this.form.exposure
    }
    return this.user
  }

  getId() : number{
   return this.id
  }

  setId(id : number) : void {
    this.id = id
  }

  setOpinion(rating : number, comment : string) {
    this.opinion = {
      id : this.getId(),
      satisfaction : rating,
      satisfactionComment : comment
    }
  }

  getOpinion() : Opinion {
    return this.opinion
  }
}
