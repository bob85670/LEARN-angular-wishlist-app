import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WishItem } from '../shared/models/wishItem'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];
  title = 'wishlist';
  
  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
