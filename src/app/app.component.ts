import { Component, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-signals';

  count = signal(0);

  todos = signal({ name: 'Gary Boyle', email: 'asdasdfasdfasd' });

  multipleCount = computed(() => this.count() * 9);

  increment() {
    this.count.set(5);
  }

  ngOnInit(): void {
    this.todos.mutate((value) => (value.email = 'beans'));
  }
}
