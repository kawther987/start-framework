import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  iconColor: string = '#2c3e50';

  showEmailLabel: boolean = false;

  showAgeLabel: boolean = false;

  showPassLabel: boolean = false;

  showNameLabel: boolean = false;

  nameInput: string = '';

  ageInput: string = '';

  emailInput: string = '';

  passInput: string = '';
}
