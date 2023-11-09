import {AfterViewInit, Component, forwardRef, Injector, Input} from '@angular/core';
import {ControlValueAccessor, FormArray, FormControl, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent implements ControlValueAccessor, AfterViewInit {

  @Input() control: FormArray;

  @Input() sizeOptions: number[];

  @Input() type: string;

  public optionValue: number;

  public onChange = (value: any) => {
  };

  public onTouched = () => {
  };

  public changeSelectedValue(value: number) {
    this.onChange(value);
    this.onTouched()
  }

  constructor() {
  }

  ngAfterViewInit() {
  }

  public writeValue(value: any): void {
    this.optionValue = value;
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }
}
