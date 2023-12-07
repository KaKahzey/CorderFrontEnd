import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    const counterElement = document.querySelector(".counter");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section--intro",
        start: "top center",
        end: "bottom center",
      },
    });

    gsap.to(".cadeau-1", {
      y: -300,
      scrollTrigger: {
        trigger: ".section--campagne",
        start: "top top",
        scrub: true,
      },
    });
    gsap.to(".cadeau-2", {
      y: -300,
      scrollTrigger: {
        trigger: ".section--campagne",
        start: "top top",
        scrub: true,
      },
    });
    gsap.to(".cadeau-3", {
      y: -300,
      scrollTrigger: {
        trigger: ".section--campagne",
        start: "top top",
        scrub: true,
      },
    });

    tl.to(counterElement, {
      innerHTML: "40",
      duration: 2,
      ease: "power1.out",
      onUpdate: function () {
        if (counterElement != null) {
          counterElement.innerHTML =
          Math.round(Number(counterElement.innerHTML)) + "%";
        }
        
      },
    });

    gsap.to(".title-1", {
      y: -20,
    });
    gsap.to(".title-2", {
      y: -20,
    });
    gsap.to(".title-3", {
      y: -20,
    });

    gsap.to(".swipe", {
      opacity: 0,
      y: 200,
      scrollTrigger: {
        trigger: ".section--home",
        start: "top top",
        scrub: true,
      },
    });

    gsap.to(".section--big", {
      borderBottomLeftRadius: "10%",
      borderBottomRightRadius: "10%",
      scrollTrigger: {
        trigger: ".section--big",
        start: "center center",
        scrub: true,
      },
    });

    let mediaQueries = gsap.matchMedia();

    mediaQueries.add("(min-width: 700px)", () => {
      gsap.to(".middle", {
        y: -50,
        filter: "blur(5px)",
        scrollTrigger: {
          trigger: ".section--home",
          start: "top top",
          scrub: true,
        },
      });

      gsap.to(".ciel-1", {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: ".section--home",
          start: "top top",
          scrub: true,
        },
      });

      gsap.to(".ciel-2", {
        y: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".section--home",
          start: "top top",
          scrub: true,
        },
      });

      gsap.to(".ciel-2", {
        y: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".section--home",
          start: "top top",
          scrub: true,
        },
      });
    });

  }

}
