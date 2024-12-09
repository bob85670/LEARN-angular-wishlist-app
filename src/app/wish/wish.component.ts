import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';
import { WishListComponent } from './/wish-list/wish-list.component';
import { AddWishFormComponent } from './/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './/wish-filter/wish-filter.component';
import { EventService } from './../../shared/services/EventService';
import { WishService } from './wish.service';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, 
    WishListComponent, AddWishFormComponent, WishFilterComponent, HttpClientModule],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {
  items: WishItem[] = [];
  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish : any) => {

      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  filter: any;
}
