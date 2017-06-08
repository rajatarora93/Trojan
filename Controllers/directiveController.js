app.controller('directiveController', ['$scope', function ($scope) {
    $scope.people = [{ Name: 'Jack', Title: 'Scientist' },
        { Name: 'Jill', Title: 'Developer' },
        { Name: 'Rob', Title: 'Rockstar' }
    ];
    $scope.dishes = ['Rice', 'Chicken', 'Biryani', 'Thali'];
}]);