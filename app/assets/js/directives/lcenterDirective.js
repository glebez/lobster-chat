angular.module('lobsterChat').directive('lcEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown", function(e) {
            if(e.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.lcEnter, {'e': e});
                });
                e.preventDefault();
            }
        });
    };
});