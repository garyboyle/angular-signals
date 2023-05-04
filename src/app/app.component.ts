import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-signals';

  count = signal(0);

  increment() {
    this.count.set(5);
  }

  ngOnInit(): void {
    this.increment();
  }
}
