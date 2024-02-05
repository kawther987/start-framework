import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  showEmailLabel: boolean = false;  

  showAgeLabel: boolean = false;

  showPassLabel: boolean = false;

  showNameLabel: boolean = false;

  nameInput:string = '';

  ageInput:string = '';

  emailInput:string = '';

  passInput:string = '';
}
