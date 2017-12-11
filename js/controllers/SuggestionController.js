app.controller('SuggestionController', ['$scope', 'suggestionsService', '$routeParams', function($scope, suggestionsService, $routeParams) {
    post.success(function(suggestionsService) {
        $scope.post = ideas.posts [$routeParams.id];
        //test comment
    });
}]);
