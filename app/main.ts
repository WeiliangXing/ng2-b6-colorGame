// import {bootstrap}    from 'angular2/platform/browser';
// import {AppComponent} from './app.component';
//
// bootstrap(AppComponent);


import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide} from 'angular2/core';
import {APP_BASE_HREF} from 'angular2/router';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue : '/' })// have to spcify the root set
]);
