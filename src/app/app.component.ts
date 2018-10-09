import { Component, OnInit } from '@angular/core';

interface File {
    name: string;
    size: number;
    type: string;
}

@Component({
  selector: 'app-root',
  template: `
      <div>
          <div *ngFor="let file of files">
              <p>{{ file.name }}</p>
              <p>{{ file.size | filesize: ' Megabytes' }}</p>
          </div>
      </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  condition = false;
  files: File[];

  ngOnInit() {
      this.files = [
          { name: 'logo.svg', size: 2120109, type: 'image/svg' },
          { name: 'banner.svg', size: 18029, type: 'image/jpg' },
          { name: 'background.svg', size: 1784562, type: 'image/png' }
      ];
  }
}
