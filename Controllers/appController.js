app.controller('appController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    $scope.logout = function () {
        bootbox.confirm("Are you sure you want to logout", function (result) {
            if (result) {
                $rootScope.username = '';
                bootbox.alert("You have been successfully logout!!");
                $scope.$apply(function () {
                    $location.path("/ApplicationHome");
                })
                console.log("logoutController" + $location.path());
            }
        });
    }
}
]);

app.controller('loginController', ['$scope', '$rootScope', '$location','myFactory', function ($scope, $rootScope, $location,myFactory) {
    $scope.validate = function () {
        myFactory.getUser($scope.user.username).then(function (data) {
            if (data.Username == undefined || $scope.user.password != data.Password) {
                $scope.message = "Oops! Credentials given were wrong! Please Re-try with valid credentials..!";
                var master = { username: '', password: '' };
                $scope.user = angular.copy(master);
                $scope.loginform.$setPristine();
            }
            else {
                $rootScope.username = $scope.user.username;
                angular.element("#login")[0].reset();
                $scope.message = '';
                bootbox.alert("Successful Login");
                $location.path("/FoodMenu");
            }
        });
       // myFactory.getPosts();
    }
    $scope.hideMessage=function()
    {
        $scope.message = '';
    }
}
]);

app.controller('signupController', ['$scope', function ($scope) {
    $scope.signup = function (form) {
        bootbox.alert("Registration details saved");
    }
}
]);


