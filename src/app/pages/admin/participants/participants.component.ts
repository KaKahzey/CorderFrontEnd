import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarService } from '../../../shared/services/navbar.service';

@Component({
  selector: 'app-participants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './participants.component.html',
  styleUrl: './participants.component.scss'
})
export class ParticipantsComponent {
}
