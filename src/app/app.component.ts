import { Component, OnInit } from '@angular/core';
import { FilesizePipe } from './filesize.pipe';
interface File {
    name: string;
    size: any;
    type: string;
}

@Component({
    selector: 'app-root',
    template: `
      <div>
          <div *ngFor="let file of mapped">
              <p>{{ file.name }}</p>
              <p>{{ file.size }}</p>
          </div>
      </div>
  `,
    styleUrls: ['./app.component.css'],
    providers: [FilesizePipe]
})
export class AppComponent implements OnInit {
    condition = false;
    files: File[];
    mapped: File[];

    constructor(private filesizePipe: FilesizePipe) {
        // code...
    }
    ngOnInit() {
        this.files = [
            { name: 'logo.svg', size: 2120109, type: 'image/svg' },
            { name: 'banner.svg', size: 18029, type: 'image/jpg' },
            { name: 'background.svg', size: 1784562, type: 'image/png' }
        ];

        this.mapped = this.files.map(file => {
            return {
                ...file, size: this.filesizePipe.transform(file.size, ' mb')
            };
        });
    }
}
