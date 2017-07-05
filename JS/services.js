var services = angular.module('services', []);
services.factory('myFactory', function ($resource, $http) {
    return {
        getUser: function (name) {
            console.log("myFactory");
            return $http.get("http://localhost:35675/api/User/GetUser?name="+name).
            then(function (response) {
                var data = response.data;
                return data;
            })
            //var urlLogin = "http://localhost:35675/api/User/GetUser/:name";
            //return $resource(urlLogin, { name: '@name' }).get({ name: name });
        },
        getPosts: function () {
            return $http.get("http://localhost:35675/api/User/Get")
           .then(function (response) {
               var data = response.data;
               console.log(data);
           })
        }
    };
});