import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ToastModel} from "../../../shared/model/toast.model";
import {BehaviorSubject, Observable} from "rxjs";
import {ToastService} from "./service/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state(
        'in',
        style({
          opacity: 1,
        })
      ),
      transition('void => *', [style({opacity: 0}), animate(200)]),
      transition('* => void', [animate(500, style({opacity: 0, transform: 'translateX(600px)'}))]),
    ]),
  ],
})
export class ToastComponent {

  public toasts$: Observable<string>;

  constructor(private toasts: ToastService) {}

  ngOnInit() {
    this.toasts$ = this.toasts.getToast();
  }

  /** Удаление "тоста" */
  public removeToast(): void {
    this.toasts.removeToast();
  }
}
