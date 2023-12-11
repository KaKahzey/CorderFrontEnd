import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowPopupService {

  private popupSubject = new Subject<boolean>();

  popupState$ = this.popupSubject.asObservable();

  togglePopup() {
    this.popupSubject.next(true);
  }
}
