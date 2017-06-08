app.controller('filterController', ['$scope', function ($scope) {
    $scope.heading = "Example for Filters";
    $scope.title = "Course Registrations";
    $scope.requests = [
        {
            username: 'Jack',
            courseSelected: 'AngularJS',
            levelOfTraining: 'Basic',
            dateOfRegistration: new Date(),
            costOfTraining: 18000
        },
        {
            username: 'Tom',
            courseSelected: 'AngularJS',
            levelOfTraining: 'Intermediate',
            dateOfRegistration: new Date(),
            costOfTraining: 25000
        },
        {
            username: 'Alice',
            courseSelected: 'AngularJS',
            levelOfTraining: 'Basic',
            dateOfRegistration: new Date(),
            costOfTraining: 15000
        },
        {
            username: 'Vinu',
            courseSelected: 'BackboneJS',
            levelOfTraining: 'Basic',
            dateOfRegistration: new Date(),
            costOfTraining: 15000
        },
        {
            username: 'Niel',
            courseSelected: 'BackboneJS',
            levelOfTraining: 'Advanced',
            dateOfRegistration: new Date(),
            costOfTraining: 35000
        }

    ]
}
]);