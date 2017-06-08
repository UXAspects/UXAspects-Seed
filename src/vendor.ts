/*
  Import jQuery and expose to global scope
*/
import * as $ from 'jquery';
(<any>window).$ = $;
(<any>window).jQuery = $;

import 'bootstrap';
import 'angular';
import '@ux-aspects/ux-aspects/dist/ng1/ux-aspects-ng1';

/*
  Import CSS
*/
import 'bootstrap/dist/css/bootstrap.min.css';
import '@ux-aspects/ux-aspects/dist/styles/ux-aspects.css';
import './assets/less/site.less';

/*
    Import Angular Libraries
*/
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
import '@angular/upgrade';
