import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wishText!: string;
  @Input() fullfilled!: boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  toggleFullfilled() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
