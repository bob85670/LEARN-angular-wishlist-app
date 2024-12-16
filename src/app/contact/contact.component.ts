import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    senderName: new FormControl(''),
    senderEmail: new FormControl(''),
    senderMessage: new FormControl('')
  });


  submitForm() {
    console.log(this.contactForm.value);
  }

}
