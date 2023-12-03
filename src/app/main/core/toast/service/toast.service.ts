import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()

export class ToastService {
  public toasts: BehaviorSubject<string> = new BehaviorSubject('');

  public addToast(toast: string): void {

    this.toasts.next(toast);

    setTimeout(() => {
      this.removeToast()
    }, 2000)
  }

  public getToast(): BehaviorSubject<string> {
    return this.toasts;
  }

  public removeToast(): void {
    this.toasts.next('');
  }

}
