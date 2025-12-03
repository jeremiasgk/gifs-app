import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardPage } from "./gifs/pages/dashboard-page/dashboard-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'gifs-app';
}
