import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {Subject} from "rxjs";
import {map} from "rxjs/operators";
import {MenuItemEnum} from "../../../shared/enums/menu-item.enum";
import {HeaderImageEnum} from "../../../shared/enums/header-image.enum";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private menuItemEnum = MenuItemEnum;
  private headerImageEnum = HeaderImageEnum;

  public image$: Subject<string> = new Subject<string>()

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.headerImage();
  }

  public headerImage(): void {
    this.route.events.pipe(
      map((route) => {
        let getUrl: string[] = [];

        if (route instanceof NavigationStart) {
          getUrl = route.url.split("/")
        }

        if (getUrl.length === 0) {
          getUrl = this.route.url.split("/")
        }

        return getUrl[getUrl.length - 1];
      }),
      map((route) => {
        switch (route) {
          case  this.menuItemEnum.SNOW:
            return this.headerImageEnum.SNOW
          case  this.menuItemEnum.VALUES:
            return this.headerImageEnum.VALUES;
          case  this.menuItemEnum.BESTSELLERS:
            return this.headerImageEnum.BESTSELLERS;
          case  this.menuItemEnum.RAIN:
            return this.headerImageEnum.RAIN;
          case  this.menuItemEnum.WEEKEND:
            return this.headerImageEnum.WEEKEND;
          default :
            return this.headerImageEnum.BESTSELLERS
        }
      })
    ).subscribe((route) => {
      this.image$.next(route)
    })
  }


}
