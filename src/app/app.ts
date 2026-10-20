import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Menu } from './layout/menu/menu';
import { Header } from './layout/header/header';

@Component({
  imports: [RouterOutlet, Footer, Menu, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('projeto-aula10');
}
