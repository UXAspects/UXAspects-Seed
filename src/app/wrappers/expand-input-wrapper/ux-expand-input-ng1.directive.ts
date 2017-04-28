angular.module('app').directive('uxExpandInputNg1', function() {
    return {
        restrict: 'E',
        scope: {
            focus: "&",
            name: "@elname",
            placeHolder: "@",
            className: "@",
            clearTextIcon: "@",
            closeSearch: "@",
            expandAlways: "=",
            onEnter: "=?"
        },
        template: `<expand-input place-holder="Search..." class-name="form-control" focus="expandTopSearch(value)" elname="top-search" clear-text-icon="hpe-close"
                    close-search="Cancel" expand-always="true"></expand-input>`,
        controller: ['$scope', function($scope) {
            this.$onDestroy = function() {
                $scope.$destroy();
            };
        }]
    };
});