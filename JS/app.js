var app = angular.module("app", ["ngRoute",'directives','filters','services','ngResource'])
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
                     when("/ApplicationHome", {
                     templateUrl: 'Templates/ApplicationHome.html',
                     controller: 'appHomeController'
                     }).
                     when("/SignUp", {
                     templateUrl: 'Templates/SignUp.html',
                     controller: 'signupController'
                     }).
                     when("/FoodMenu", {
                     templateUrl: 'Templates/FoodMenu.html',
                     controller: 'foodCtrl'
                         }).
                     when("/FoodDetail", {
                     templateUrl: 'Templates/FoodDetail.html',
                     controller: 'fooddetail'
                         }).
                     when("/FoodCart", {
                     templateUrl: 'Templates/FoodCart.html',
                     controller: 'cartCtrl'
                         }).
                     when("/Order", {
                     templateUrl: 'Templates/ViewOrder.html',
                     controller: 'orderCtrl'
                         }).
                     otherwise({
                         redirectTo:''
                     });
                     $locationProvider.html5Mode(true);//code embedded to remove # from href link and url.
                 });
app.run(function ($rootScope, $route, $location) {
    $rootScope.$on('$locationChangeSuccess', function  () {
        $rootScope.actualLocation = $location.path();
        console.log($location.path());
        console.log("rootscope" + $rootScope.username);
    });
    $rootScope.$watch(function () { return $location.path() }, function (newLocation, oldLocation) {
        if ($rootScope.username == '') {
            if ($location.path() == '/login') {
                console.log($location.path());
                $location.path("/login");
            }
            else if ($location.path() == '/SignUp') {
                $location.path("/SignUp");
            }
            else if ($location.path() == '/ApplicationHome') {
                console.log('ApplicationHomeSuccess');
                $location.path('/ApplicationHome');
            }
        }
    });
});
