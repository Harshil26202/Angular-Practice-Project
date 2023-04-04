import { Component } from '@angular/core';
@Component({
    selector: 'app-warning',
    templateUrl: './warningalert.component.html',
    styles: [`
        white-text {
            color: 'white';
        }
    `]
  })

export class WarningAlertComponent {
    showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}