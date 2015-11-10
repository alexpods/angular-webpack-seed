import { module } from 'angular';

export const AppDirective = () => ({
  restrict: 'E',
  template: `
    <b>Hello, World!</b>
  `
});

export const app = module('app', [])
  .directive('app', AppDirective);