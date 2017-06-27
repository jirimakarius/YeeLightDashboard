import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'Propeller';
import 'angular-radial-color-picker';
import 'angular-socket-io';
import 'lodash';

import {main} from './app/components/main/main';
import {toolbar} from './app/components/toolbar/toolbar';
import {bulb} from './app/components/bulb/bulb';
import {control} from './app/components/control/control';

import config from './config';
import events from './events';
import './app/services/socketio';
import './app/services/filter';

import './index.css';
import 'angular-material/angular-material.css';
import 'angular-radial-color-picker/dist/css/color-picker.css';

export const app = 'app';

angular
  .module(app, ['ngMaterial', 'ui.router', 'color.picker.core', 'btford.socket-io', 'Services.SocketIO', 'Filters'])
  .component('app', main)
  .component('toolbar', toolbar)
  .component('bulb', bulb)
  .component('control', control)
  .config(config)
  .run(events);
