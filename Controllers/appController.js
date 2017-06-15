app.controller('appController', ['$scope','$rootScope','$location', function ($scope,$rootScope,$location) {
    $scope.logout = function () {
        bootbox.confirm("Are you sure you want to logout", function (result) {
            if (result) {
                $rootScope.username = '';
                bootbox.alert("You have been successfully logout!!");
                $scope.$apply(function () {
                    $location.path("/ApplicationHome");
                })
                console.log("logoutController"+$location.path());
            }
        });
    }
}
]);

app.controller('loginController', ['$scope', '$rootScope','$location', function ($scope, $rootScope, $location) {
    $scope.validate = function (form) {
        if ($scope.user.username != $scope.user.password) {
            $scope.message = "Oops! Credentials given were wrong! Please Re-try with valid credentials..!";
            angular.element("#login")[0].reset();
        }
        else {
            $rootScope.username = $scope.user.username;
            angular.element("#login")[0].reset();
            $scope.message = '';
            bootbox.alert("Successful Login");
            $location.path("/FoodMenu");
           
        }
    }
}
]);

app.controller('signupController', ['$scope', function ($scope) {
    $scope.signup=function(form)
    {
        bootbox.alert("Registration details saved");
    }
}
]);