var app = angular.module("app", ["ngRoute",'directives','filters'])
                 .config(function ($routeProvider, $locationProvider) {
                     $routeProvider
                     .when("/Books", {
                     templateUrl:'Templates/ViewBooks.html',
                     controller:'bookListCtrl'
                     }).
                     when("/Filters", {
                     templateUrl:'Templates/AngularFilterDemo.html',
                     controller:'filterController'
                     }).
                     when("/Courses", {
                     templateUrl: 'Templates/CourseRegistration.html',
                     controller: 'registerController'
                     }).
                     when("/Directives", {
                     templateUrl: 'Templates/AngularDirectiveDemo.html',
                     controller: 'directiveController'
                     }).
                     when("/Login", {
                     templateUrl: 'Templates/Login.html',
                     controller: 'loginController'
                     }).
                     when("/SignUp", {
                     templateUrl: 'Templates/SignUp.html',
                     controller: 'signupController'
                     }).
                     otherwise({
                         redirectTo: '/'
                     });
                     $locationProvider.html5Mode(true);//code embedded to remove # from href link and url.
                 });