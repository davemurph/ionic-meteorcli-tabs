CORDOVA
-------
Add cordova/meteor plugins: 
	meteor add cordova:cordova-plugin-statusbar@2.2.3
	meteor add cordova:cordova-plugin-splashscreen@4.0.1

Add TS typings for the plugins:
	meteor npm install @types/cordova-plugin-statusbar --save-dev
	meteor npm install @types/cordova-plugin-splashscreen --save-dev

Add to "types" in compilerOptions.types intsconfig.json:
	"types": [
			"cordova-plugin-splashscreen",
			"cordova-plugin-statusbar",
			"meteor",
			"underscore"
		]
	NOTE: shouldn't have to add these if added with npm, but won't build properly without it?

Restart VSCode - can use the global objects as per cordova documentation,
	e.g. StatusBar.styleDefault();
		 navigator.splashscreen.hide();

NOTE: meteor packages mobile-status-bar and launch-screen provide good defaults for both these plugins
	e.g. when installed they set various preferences in the cordova config.xml file.
	Can change plugin settings programatically (like above) or use mobile-config.js and set prefs there

IONIC THEME
-----------
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

ANDROID
-------
installed latest Android Studio
Had to install a particular version of JDK (9 didnt work): jdk1.8.0_144
Had to manually add gradle path to path: C:\Program Files\Android\Android Studio\gradle\gradle-3.2\bin
NEED TO CHECK IF ANDROID_HOME/JAVA_HOME env variables are necessary on Windows???

list installed emulators
	emulator -list-avds

start emulator (the one without x86 does not work?)
	emulator -avd Nexus_5X_API_26_x86
