import {  Component} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent   {
  // imgSrc:any = ''
  // showLayer(e:any):void{
  //   // this.imgSrc = e.target.src ;
  //   // console.log(this.imgSrc);
  //   document.querySelector('.mo1')?.classList.remove('d-none')
  // }
  // showLayer2():void{
  //   document.querySelector('.mo2')?.classList.remove('d-none')
  // }
  // showLayer3():void{
  //   document.querySelector('.mo3')?.classList.remove('d-none')
  // }
  // hideLayer(){
  //     document.querySelector('.mo1')?.classList.add('d-none')
  // }
  // hideLayer2(){
  //     document.querySelector('.mo2')?.classList.add('d-none')
  // }
  // hideLayer3(){
  //     document.querySelector('.mo3')?.classList.add('d-none')
  // }
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

  closeModal(): void {
    this.showModal = false;
    this.selectedImage = null;
  }
  
}
