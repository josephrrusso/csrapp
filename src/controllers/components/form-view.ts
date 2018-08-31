import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'form-view',
  templateUrl: '../../pages/components/form-view.html'
})
export class FormViewComponent {

	@ViewChild('map') mapElement: ElementRef;

	@Input()
    form: any;
    arr: any;

  constructor() {
    //console.log('Hello AppHeaderComponent Component');
    //this.text = 'Hello World';
  }

	ngOnInit() {
    var json = this.form.form.json;
    this.arr = JSON.parse(json);
    console.log(this.arr);
	}

}