import { Component, OnInit } from '@angular/core';
import { WishComponent } from './wish/wish.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WishComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  
}
