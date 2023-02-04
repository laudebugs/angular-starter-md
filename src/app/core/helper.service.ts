import { Injectable } from '@angular/core'
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar'
import { NavigationEnd, Router } from '@angular/router'
import { filter, map, tap } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class HelperService {
    #collapsed = JSON.parse(localStorage.getItem('collapsed') ?? 'false')

    get collapsed(): boolean {
        return this.#collapsed
    }
    set collapsed(value: boolean) {
        this.#collapsed = value
        localStorage.setItem('collapsed', JSON.stringify(value))
    }

    currentRoute = '/'

    constructor(private snackBarSvc: MatSnackBar, private router: Router) {
        this.currentRoute = this.router.url
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map((event) => (event as NavigationEnd).url),
                tap((url) => (this.currentRoute = url)),
            )
            .subscribe()
    }

    showSnackBar(message: string, action: string, duration: number): void {
        this.snackBarSvc.open(message, action, { duration })
    }

    toggleCollapse(): void {
        this.collapsed = !this.collapsed
    }
}
