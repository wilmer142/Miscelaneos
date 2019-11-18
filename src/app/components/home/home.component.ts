import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterCont");
  }

  ngAfterContentChecked () {
    console.log("ngAfterCont");
  }

  ngAfterViewInit() {
    console.log("ngAfterView");
  }

  ngAfterViewChecked() {
    console.log("ngAfterView");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }


}
