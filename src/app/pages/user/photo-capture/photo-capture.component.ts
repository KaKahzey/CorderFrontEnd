import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-photo-capture',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './photo-capture.component.html',
  styleUrl: './photo-capture.component.scss'
})
export class PhotoCaptureComponent implements AfterViewInit {
  WIDTH = '100vw';
  HEIGHT = '100vh';

  
  @ViewChild("video")
  public video!: ElementRef;
  
  @ViewChild("canvas")
  public canvas!: ElementRef;
  
  captures: string[] = [];
  error: any;
  isCaptured!: boolean;
  
  async ngAfterViewInit() {
    await this.setupDevices();
  }

  async setupDevices() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        if (stream) {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
          this.error = null;
        } else {
          this.error = "You have no output video device";
        }
      } catch (e) {
        this.error = e;
      }
    }
  }

  capture() {
    this.drawImageToCanvas(this.video.nativeElement);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    this.isCaptured = true;
  }

  drawImageToCanvas(image: any) {
    this.canvas.nativeElement
      .getContext("2d")
      .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
  }
}
