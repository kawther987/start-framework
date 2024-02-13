import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  iconColor: string = '#2c3e50';
  images = [
    { src: './assets/images/poert1.png', alt: 'Image 1' },
    { src: './assets/images/port2.png', alt: 'Image 2' },
    { src: './assets/images/port3.png', alt: 'Image 3' },
    { src: './assets/images/poert1.png', alt: 'Image 4' },
    { src: './assets/images/port2.png', alt: 'Image 5' },
    { src: './assets/images/port3.png', alt: 'Image 6' },
  ];

  showModal: boolean = false;
  selectedImage: string | null = null;

  openModal(src: string): void {
    this.selectedImage = src;
    this.showModal = true;
  }

  closeModal(e: MouseEvent): void {
    if (e.target === e.currentTarget) {
      this.showModal = false;
      this.selectedImage = null;
    }
  }
}
