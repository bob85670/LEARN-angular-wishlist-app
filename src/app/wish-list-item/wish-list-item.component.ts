import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';
import events from './../../shared/services/EventService';

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

  get cssClass() {
    //return this.fullfilled ? ['strikeout', 'text-muted'] : [];
    return {'strikeout text-muted': this.fullfilled};
  }

  removeWish() {
    events.emit('removeWish', this.wishText);
  }

  toggleFullfilled() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
