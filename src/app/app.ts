import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {TigrinyaAlphabetComponent} from './components/tigrinya-alphabet/tigrinya-alphabet.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TigrinyaAlphabetComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'geez';
}
