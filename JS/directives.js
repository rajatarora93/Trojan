var directives = angular.module('directives', []);
directives.directive('headerLine', function () {
    return {
        scope: {
            'head': '=title'
        },
        template: '<B><I>{{head}}</I></B>',
        link: function ($scope, element) {
            element.bind("click", function () {
                element.css("text-decoration", "underline");
            })
        }
    };
});

directives.directive('master', function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            scope.$watch(function () {
                scope.style = {
                    height: element[0].offsetHeight + 'px',
                };
            });
        }
    }
});

directives.directive('highlight', function () {
    return {
        restrict: "EA",
        link: function ($scope, element) {
            element.bind("mouseover", function () {
                element.css("color", "red");
                element.css("font-style", "italic");
                element.css("font-weight", "bold");
            });
            element.bind("mouseout", function () {
                element.css("color", "initial");
                element.css("font-style", "initial");
                element.css("font-weight", "initial");
            });
        }
    };
});

directives.directive('pwCheck', function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            elem.bind("keyup", function (evt) {
                var firstPassword = '#' + attrs.pwCheck;
                scope.$apply(function () {
                    var val = elem.val();
                    if (val == $(firstPassword).val()) {
                        ctrl.$setValidity('pwmatch', true);
                    }
                    else {
                        ctrl.$setValidity('pwmatch', false);
                    }
                });
            });
        }
    };
});
