/*
  Import jQuery and expose to global scope
*/
import * as $ from 'jquery';
(<any>window).$ = $;
(<any>window).jQuery = $;

import 'bootstrap';

/*
  Import Angular 1 Components and their dependencies
*/
import 'angular';

import 'ux-aspects/dist/ng1/ux-aspects-ng1';

/*
  Import CSS
*/
import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../bower_components/ux-aspects/dist/styles/ux-aspects.css';

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
