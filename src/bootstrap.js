import { bootstrap } from 'angular';
import { app } from './app.js';

const appContainer = document.getElementsByTagName('app')[0];

bootstrap(appContainer, [app.name]);
