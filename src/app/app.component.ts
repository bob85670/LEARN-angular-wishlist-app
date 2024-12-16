import { Component, OnInit } from '@angular/core';
import { WishComponent } from './wish/wish.component';
import { ContactModule } from './contact/contact.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WishComponent, ContactModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  
}
