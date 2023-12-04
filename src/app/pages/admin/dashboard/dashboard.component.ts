import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  totalParticipants : number = 1297
  weekParticipants : number = 19
  days : number[] = [5, 10, 3, 4, 1, 5, 8]
  timeLeft : number = this.displayTimeLeft("2023-12-02")

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {}

  ngOnInit() : void {
    this.setHeight(this.days[0], "monday")
    this.setHeight(this.days[1], "tuesday")
    this.setHeight(this.days[2], "wednesday")
    this.setHeight(this.days[3], "thursday")
    this.setHeight(this.days[4], "friday")
    this.setHeight(this.days[5], "saturday")
    this.setHeight(this.days[6], "sunday")
  }

  setHeight(height: number, day: string): void {
    const selectedDay = this._elementRef.nativeElement.querySelector(`.${day}`)
    this._renderer.setStyle(selectedDay, 'height', `${height}0%`)
  }

  displayTimeLeft( deadline : string) : number {
    const today = new Date()
    const deadlineDate = new Date(deadline)
    const timeLeft = deadlineDate.getTime() - today.getTime()
    if (timeLeft <= 0) {
      return 0
    }
    const days = Math.floor((timeLeft / (1000 * 60 * 60 * 24)) + 1)
    return days
  }
}
