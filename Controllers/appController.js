app.controller('appController', ['$scope', '$rootScope', '$location', 'CartServiceFactory', function ($scope, $rootScope, $location, CartServiceFactory) {
    $rootScope.counter = CartServiceFactory.cart().getTotalCount();
    $scope.$on('rootEvent', function (event, data) {
        $rootScope.counter = data;
    });
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

app.controller('loginController', ['$scope', '$rootScope', '$location', 'myFactory', function ($scope, $rootScope, $location, myFactory) {
    $scope.validate = function () {
        myFactory.getUser($scope.user.username).then(function (data) {
            console.log(data);
            if (data.Username === undefined || $scope.user.password !== data.Password) {
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
    $scope.hiddenMessage = function () {
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

app.controller('foodCtrl', ['$scope', '$rootScope', 'CartServiceFactory', 'myFactory', 'sharedData', function ($scope, $rootScope, CartServiceFactory,myFactory,sharedData) {
    $scope.getFood = function () {
        //$rootScope.count = CartServiceFactory.cart().getTotalCount();
        myFactory.getFoodItems().then(function (data) {
            $scope.items = data;
        });
    }
    $scope.selectedItem = function (item) {
        console.log("Select Item");
        sharedData.setItem(item);
    }
}]);

app.controller('fooddetail', ['$scope', '$rootScope', 'CartServiceFactory', 'myFactory', 'sharedData', function ($scope, $rootScope, CartServiceFactory, myFactory,sharedData) {
    $scope.getdetails = function () {
        myFactory.getFoodDetails().then(function (data) {
            $scope.products = data[sharedData.getItem()]
        });
    }
}]);

app.controller('priceCtrl', ['$scope', function ($scope) {
    $scope.sz = $scope.product.sizes[0];
    $scope.price = $scope.product.prices[0];
    $scope.qty = 1;
    $scope.displayPrice = function ()
    {
        if ($scope.sz ==="small")
        {
            $scope.price = $scope.product.prices[0];
        }
        else if ($scope.sz === "medium")
        {
            $scope.price = $scope.product.prices[1];
        }
        else if ($scope.sz === "large")
        {
            $scope.price = $scope.product.prices[2];
        }
        else {
            bootbox.alert("Please select size of your meal");
        }
    }
}]);

app.controller('cartCtrl', ['$scope','$rootScope','CartServiceFactory', function ($scope,$rootScope,CartServiceFactory) {
    console.log("cartCtrl");
    // get cart from service
    $scope.cart = CartServiceFactory.cart();
    $scope.addItem = function (sku,name,price,quantity,size)
    { 
        $scope.cart.addItem(sku,name,price,quantity,size);
        $rootScope.$broadcast('rootEvent', $scope.cart.getTotalCount());
    }
}]);

app.controller('orderCtrl', ['$scope', '$rootScope', 'OrderServiceFactory', function ($scope, $rootScope, OrderServiceFactory) {
    $scope.count = 100;
    $scope.submit = function (items,totalCost)
    {
        bootbox.confirm("Are you sure you want to place this order?", function (result) {
            if (result) {
                $scope.bag = OrderServiceFactory.bag();
                $scope.orderObj = new Object();
                $scope.orderObj.date = new Date().toDateString();
                $scope.orderObj.status = "Not completed";
                $scope.orderObj.items = items;
                $scope.orderObj.totalCost = totalCost;
                $scope.orderObj.user = $rootScope.username;
                $scope.orderObj.orderCount = $scope.count;
                $scope.bag.submitOrder($scope.orderObj);
                bootbox.alert("Your order has been placed successfully.Please pay cash on delivery!")
            }
        });
    }
}]);


