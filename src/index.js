import { bootstrap  } from 'angular';
import { app } from './app';

const appContainer = document.getElementsByTagName('my-app')[0];

bootstrap(appContainer, [app.name]);
