import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { List } from './components/list/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-service-app');
}
