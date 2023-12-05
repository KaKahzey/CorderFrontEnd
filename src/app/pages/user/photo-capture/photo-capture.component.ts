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
  WIDTH = 4640;
  HEIGHT = 4480;

  
  @ViewChild("video")
  public video!: ElementRef;
  
  @ViewChild("canvas")
  public canvas!: ElementRef;
  
  captures: string[] = [];
  error: any;
  
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
    console.log(this.captures[0]);
    fetch(this.captures[0])
    .then(async res => {
      const myBlob = await res.blob();
      // const binaryBlob = new Uint8Array(await myBlob.arrayBuffer());
      // let byteArray : any = [];
      // binaryBlob.forEach(byte=>{
      //   for(let i = 7; i>=0; i--){
      //     let bit = byte>>i&1;
      //     byteArray.push(bit)
      //   }
      // })
      // console.log(byteArray);
      const blobUrl = URL.createObjectURL(myBlob);
      console.log(blobUrl);
    })
  }

  drawImageToCanvas(image: any) {
    this.canvas.nativeElement
      .getContext("2d")
      .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
  }
}
