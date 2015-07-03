angular.module('lobsterChat', [
  'ngRoute', 'LocalStorageModule', 'truncate'
]).config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('lobster-chat');
});
