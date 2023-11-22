import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarService } from '../../../shared/services/navbar.service';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
}
