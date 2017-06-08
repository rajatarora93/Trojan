app.controller('registerController', ['$scope', function ($scope) {
    $scope.heading = "Course Registration";
    $scope.apply = false;
    $scope.levels = { level1: "Basic", level2: "Intermediate", level3: "Advanced", Others: "Others" };
    $scope.getCourses = function () {
        if ($scope.user.trainingMode == "VCR") {
            $scope.Courses = [
                { 'coursename': 'HTML' },
                { 'coursename': 'CSS' },
                { 'coursename': 'JS' }
            ];
        }
        else if ($scope.user.trainingMode == "CR") {
            $scope.Courses = [
                 { 'coursename': 'AngularJS' },
                { 'coursename': 'BackboneJS' }
            ];
        }
    };
    $scope.message = "";
    $scope.save = function () {
        if($scope.user.gender=="Male")
        {
            $scope.message = "Mr." + $scope.user.name + " has opted for " + $scope.user.levelSelected + " level training on " + $scope.user.courseSelected + " in " + $scope.user.trainingMode + " mode.";
            $scope.message += "He can be contacted at:" + $scope.user.mobile;
        }
        else if($scope.user.gender=="Female")
        {
            $scope.message = "Ms." + $scope.user.name + " has opted for " + $scope.user.levelSelected + " level training on " + $scope.user.courseSelected + " in " + $scope.user.trainingMode + " mode.";
        }
    }
}]);