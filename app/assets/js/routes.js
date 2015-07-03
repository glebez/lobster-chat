angular.module('lobsterChat').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/posts'
    })
    .when('/posts', {
      templateUrl: 'assets/templates/posts-index.html',
      controller: "PostsIndexController"
    })
    .when('/posts/:id', {
      templateUrl: 'assets/templates/post-show.html',
      controller: "PostShowController"
    })
});