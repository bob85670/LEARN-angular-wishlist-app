import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  senderNameControl = new FormControl('');
  senderEmailControl = new FormControl('');
  senderMessageControl = new FormControl('');

  submitForm() {
    if (this.senderNameControl.dirty) {
      alert('you changed the name field');
    }
  }

}
