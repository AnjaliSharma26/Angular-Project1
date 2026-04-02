import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './app.html'
})
export class App {
  handleClickEvent() {
    alert("Function Called");
    this.otherFunction()
  }

  otherFunction(){
    alert("Other Function");
  }
}