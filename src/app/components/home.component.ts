import { Component } from '@angular/core'
import { CoreModule } from '../core/core.module'

@Component({
    standalone: true,
    imports: [CoreModule],
    template: '<h1>Home Component Works</h1>',
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `,
    ],
})
export class HomeComponent {}
