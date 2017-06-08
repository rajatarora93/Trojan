app.controller('loginController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.validate = function (form) {
        if ($scope.user.username != $scope.user.password) {
            $scope.message = "Oops! Credentials given were wrong! Please Re-try with valid credentials..!";
            angular.element("#loginform")[0].reset();
        }
        else {
            $rootScope.username = $scope.user.username;
            bootbox.alert("Successful Login");
            angular.element("#loginform")[0].reset();
            $scope.message = '';
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