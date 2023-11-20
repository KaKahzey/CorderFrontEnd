import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PesticideChoiceService } from '../../../shared/services/pesticide-choice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-good-practice',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './good-practice.component.html',
  styleUrl: './good-practice.component.scss'
})
export class GoodPracticeComponent implements OnDestroy {
  texte = 'Texte par défaut';
  private subscription: Subscription;

  constructor(private pesticideService: PesticideChoiceService) {
    this.subscription = this.pesticideService.choix$.subscribe((choix) => {
      this.mettreAJourTexte(choix);
    });
  }

  mettreAJourTexte(choix: string) {
    // Mettez à jour le texte en fonction du choix
    // Exemple simple, vous pouvez personnaliser cette logique
    switch (choix) {
      case 'A':
        this.texte = 'Texte pour le choix A';
        break;
      case 'B':
        this.texte = 'Texte pour le choix B';
        break;
      case 'C':
        this.texte = 'Texte pour le choix C';
        break;
      default:
        this.texte = 'Texte par défaut';
        break;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
