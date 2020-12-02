import angular from 'angular';
import '@cds/core/alert/register';
import '@cds/core/button/register';
import './style.css';

angular.module('app', []);
angular.element(document).ready(() => angular.bootstrap(document, ['app']));

// https://clarity.design/storybook/core

angular.module('app').component('appRoot', {
  template: `
    <main cds-layout="vertical gap:lg p:lg">
      <h1 cds-text="heading">Clarity Core - AngularJS Starter</h1>

      <cds-button status="primary" ng-click="$ctrl.showAlert = true">hello there</cds-button>

      <cds-alert-group ng-if="$ctrl.showAlert" ng-prop-status="$ctrl.status">
        <cds-alert ng-on-close_change="$ctrl.showAlert = false" closable>
          General Kenobi, you are a bold one...
        </cds-alert>
      </cds-alert-group>
    </main>
  `,
  controller: function () {
    this.status = 'danger';
    this.showAlert = false;
  }
});
