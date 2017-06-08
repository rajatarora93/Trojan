app.controller('bookListCtrl', ['$scope', function ($scope) {
    $scope.book = [
        {
            "bookId": 101,
            "bookTitle": "Angular JS",
            "topic": "AngularJS",
            "author": "Green",
            "cost": 375,
            "imgUrl": "Images/download1.jpg",
            "issued":true
        },
         {
             "bookId": 102,
             "bookTitle": "Instant Angular JS Starter",
             "topic": "AngularJS",
             "author": "Dan Menard",
             "cost":150,
             "imgUrl": "Images/download2.jpg",
             "issued": true
         },
          {
              "bookId": 103,
              "bookTitle": "Ng-Book:The Complete Book on AngularJS",
              "topic": "AngularJS",
              "author": "Ari Lerner",
              "cost":4657,
              "imgUrl": "Images/download3.jpg",
              "issued": false
          },
           {
               "bookId": 104,
               "bookTitle": " Developing Backbone JS Applications",
               "topic": "BackBoneJS",
               "author": "Addy Osmani",
               "cost":650,
               "imgUrl": "Images/download4.jpg",
               "issued":false
           },
            {
                "bookId": 105,
                "bookTitle": "Backbone.js Patterns and best Practices",
                "topic": "BackboneJS",
                "author": "Greenwood",
                "cost": 565,
                "imgUrl": "Images/download5.jpg",
                "issued": true
            },
             {
                 "bookId": 106,
                 "bookTitle": "Angular JS Basics",
                 "topic": "AngularJS",
                 "author": "Tom Wilson",
                 "cost": 900,
                 "imgUrl": "Images/download1.jpg",
                 "issued": false
             },
              {
                  "bookId": 107,
                  "bookTitle": "Angular JS Development",
                  "topic": "AngularJS",
                  "author": "Shane Warne",
                  "cost": 975,
                  "imgUrl": "Images/download2.jpg",
                  "issued": true
              }
    ]
}
]);