"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
    'chartjs': 'vendor/chart.js/'
};

/** User packages configuration. */
const packages: any = {
    'chartjs': { defaultExtension: 'js', main: 'dist/Chart.bundle.min.js' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    
    // Thirdparty barrels.
    'rxjs',
    'primeng',
    
    // App specific barrels.
    'app',
    'app/shared',
    /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
    cliSystemConfigPackages[barrelName] = {main: 'index'};
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
                  map: {
                      '@angular': 'vendor/@angular',
                      'rxjs': 'vendor/rxjs',
                      'main': 'main.js',
                      'primeng': 'vendor/primeng'
                      
                  },
                  packages: cliSystemConfigPackages
              });

// System.import('vendor/chart.js/dist/Chart.bundle.min.js').then((m) => {
//   console.log(m);
// });

// Apply the user's configuration.
System.config({map, packages});
