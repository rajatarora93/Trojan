var services = angular.module("services", []);
services.service('sharedData', function () {
    this.item = '';
    this.setItem = function (itemcode) {
        this.item = itemcode;
        console.log(this.item);
    };
    this.getItem = function () {
        return this.item;
    };
});

services.factory('CartServiceFactory', function () {
    return{
        cart: function () {
            console.log("Cart");
            return new shoppingCart('Cart');
        }
    };
});

services.factory('OrderServiceFactory', function () {
    return {
        bag: function () {
            console.log("bag");
             return new customerOrders('Customer');
        }
    };
});

services.factory('myFactory', function ($resource, $http) {
    return {
        getUser: function (name) {
            console.log("myFactory");
            return $http.get("http://localhost:58850/api/User/GetUser?name=" + name).
                then(function (response) {
                    var data = response.data;
                    return data;
                })
            //var urlLogin = "http://localhost:35675/api/User/GetUser/:name";
            //return $resource(urlLogin, { name: '@name' }).get({ name: name });
        },
        getFoodItems: function () {
            return $http.get("http://localhost:58850/api/FoodItems/GetFoodItems")
                .then(function (response) {
                    var data = response.data;
                    return data;
                })
        },
         getFoodDetails: function () {
            return $http.get("http://localhost:58850/api/FoodItems/GetFoodDetails")
                .then(function (response) {
                    var data = response.data;
                    return data;
                })
         }
    };
});
