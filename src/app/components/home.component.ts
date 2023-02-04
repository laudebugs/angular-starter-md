import { Component } from '@angular/core'
import { CoreModule } from '../core/core.module'

@Component({
    standalone: true,
    imports: [CoreModule],
    template: '<h1>Home Component Works</h1>',
    styles: [],
})
export class HomeComponent {}
