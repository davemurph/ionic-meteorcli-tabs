import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import template from "./app.html";

@Component({
	template
})
export class MyApp {
	rootPage:any = TabsPage;

	constructor(platform: Platform) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			if (platform.is('cordova')) {
				StatusBar.styleDefault();
				navigator.splashscreen.hide();
			}
		});
	}
}