import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'propeller';
import 'angular-radial-color-picker';

import {hello} from './app/hello';

import config from './config';

import './index.css';
import 'angular-material/angular-material.css';
import 'angular-radial-color-picker/dist/css/color-picker.css';

export const app = 'app';

angular
  .module(app, ['ngMaterial', 'ui.router', 'color.picker.core'])
  .component('app', hello)
  .config(config);
