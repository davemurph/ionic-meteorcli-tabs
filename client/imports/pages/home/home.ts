import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import template from './home.html';

@Component({
	selector: 'page-home',
	template
})
export class HomePage {
	constructor(public navCtrl: NavController) {
	}
}
