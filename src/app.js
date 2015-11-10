import { module } from 'angular';

export const MyAppDirective = () => ({
  restrict: 'E',
  template: `
    <b>Hello World</b>
  `
});

export const app = module('app', [])
  .directive('myApp', MyAppDirective);