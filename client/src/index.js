import angular from 'angular';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-ui-router';
import 'Propeller';
import 'angular-radial-color-picker';
import 'angular-socket-io';
import 'lodash';

import {main} from './app/components/main/main';
import {toolbar} from './app/components/toolbar/toolbar';
import {bulb} from './app/components/bulb/bulb';
import {control} from './app/components/control/control';
import menu from './app/components/menu/menu';

import config from './config';
import events from './events';
import './app/services/socketio';
import './app/services/filter';

import './index.css';
import 'angular-material/angular-material.css';
import 'angular-radial-color-picker/dist/css/color-picker.css';

export const app = 'app';
/** @ngInject */
angular
  .module(app, ['ngMaterial', 'ui.router', 'color.picker.core', 'btford.socket-io', 'services.socketIO', 'filters'])
  .config(config)
  .component('app', main)
  .component('toolbar', toolbar)
  .component('bulb', bulb)
  .component('control', control)
  .controller('MenuController', menu)
  .run(events);
