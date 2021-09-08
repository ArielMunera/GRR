import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grr';
  ngOnInit() {
    document.location.href = 'https://youtu.be/dQw4w9WgXcQ';
  }
}
