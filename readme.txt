[meteor npm install -global typings]
	can use typings command to install typings in root "/typings" folder in project
	add:
		"files": ["typings/index.d.ts"],
	to tsconfig.json

Add cordova/meteor plugins: 
	meteor add cordova:cordova-plugin-statusbar@2.2.3
	meteor add cordova:cordova-plugin-splashscreen@4.0.1

Add TS typings for the plugins:
	typings install dt~cordova-plugin-statusbar --global
	typings install dt~cordova-plugin-splashscreen --global

Restart VSCode - can use the global objects as per cordova documentation,
	e.g. StatusBar.styleDefault();
         navigator.splashscreen.hide();

mys:fonts
	the map in fonts.json needs to include "assets/": e.g. "assets/fonts/ionicons.ttf"
	see variables.scss: $font-path: "../assets/fonts";
	also, need to stop and restart application for any changes to  fonts.json to take effect

theme/ionicons.scss
	this is just a copy of node_modules\ionic-angular\fonts\ionicons.scss
	with the paths to ionicons-icons and ionicons-variables changed to absolute path

TO BUILD THE IONIC THEME:
1. create client/imports/theme folder
2. add components.scss
	import all scss files from node_modules/ionic-angular/components
	also, import platforms scss files from node_modules/ionic-angular/platform
3. add ionicons.scss
	copy from node_modules\ionic-angular\fonts\ionicons.scss
	change the paths for ionicons-icons and ionicons-variables to full paths:
		@import "{}/node_modules/ionicons/dist/scss/ionicons-icons";
		@import "{}/node_modules/ionicons/dist/scss/ionicons-variables";
4. add variables.scss
	copy from ionic app
	change globals import to actual path:
		@import "{}/node_modules/ionic-angular/themes/ionic.globals";
	add  importing of components (i.e. our components.scss file)
		@import "components";
	change ionicons import to our ionicons.scss file:
		@import "ionicons";
	change theme import to actual path:
		@import "{}/node_modules/ionic-angular/themes/ionic.theme.default";
	change fonts imports to actual paths:
		@import "{}/node_modules/ionic-angular/fonts/noto-sans";
		@import "{}/node_modules/ionic-angular/fonts/roboto";
5. main.scss
	import variables.scss,  app.scss, and any individualt pages scss
