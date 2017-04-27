angular.module('app').directive('uxHelpCenterMenuNg1', function() {
    return {
        restrict: 'E',
        scope: {
            url: "@",
            helpText: "@",
            icon: "@",
            target: "@?",
            sortFn: "=?"
        },
        template: `<help-center-menu url="" help-text="Help Center" icon="'hpe-help'" target="_self"></help-center-menu>`,
        controller: ['$scope', function($scope) {
            this.$onDestroy = function() {
                $scope.$destroy();
            };
        }]
    };
});