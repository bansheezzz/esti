import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  private current = 'search';

  constructor(private router: Router) {
    router.events.subscribe((val: NavigationStart) => {
        this.current = this.evaluateRoute(val.url);
    });
  }

  public getPrimary (item: string) {
    if (item === this.current) {
      return 'primary';
    }
    return ''
  }

  private evaluateRoute(url: string): string {
    switch (url) {
      case '/search':
        return 'search';
      case '/personalinfo':
        return 'personal';
      case '/diseasetreatment':
        return 'disease';
      case '/stiinfo':
        return 'sti';
      case '/contact':
        return 'contact';
    }
  }
}
