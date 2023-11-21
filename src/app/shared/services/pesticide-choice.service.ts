import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesticideChoiceService {
  private choixSubject = new Subject<string>();

  choix$ = this.choixSubject.asObservable();

  informerChoix(choix: string) {
    this.choixSubject.next(choix);
  }
}
