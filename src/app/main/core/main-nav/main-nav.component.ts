import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable, tap} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {NavigationEnd, Route, Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @ViewChild('drawer') drawer: MatSidenav;

  private breakpointObserver = inject(BreakpointObserver);
  public isOpen: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.routeChanged();
  }

  public basketToggle(): void {
    this.isOpen = !this.isOpen;
  }

  public OpenShoppingCart(): void {
    this.route.navigate(['/main/cart']);
  }

  private routeChanged(): void {
    this.route.events.pipe(tap((route) => {
      if (route instanceof NavigationEnd) {
        this.drawer.toggle();
      }
    })).subscribe()
  }

}
