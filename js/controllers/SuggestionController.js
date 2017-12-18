app.controller('SuggestionController', ['$scope', 'suggestionsService', '$routeParams', function($scope, suggestionsService, $routeParams) {


    $scope.post = suggestionsService.posts[$routeParams.id];

    $scope.addComment = function() {
        console.log(" comments",$scope.post.comments);
        if(!$scope.comment || $scope.comment === "") {
            return;
        }

        $scope.post.comments.push({
            comments: $scope.comment,
            user:""
        });

        $scope.comment = '';
    };
}]);



