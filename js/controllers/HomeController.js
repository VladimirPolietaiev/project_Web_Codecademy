app.controller('HomeController', ['$scope','suggestionsService', function($scope, suggestionsService) {

    $scope.posts = suggestionsService.posts;

    $scope.addSuggestion = function() {
        
           //if input empty, don't submit
           if(!$scope.title || $scope.title === "") {
                    return;
                }

           //push suggestion posts in suggestionsService.js
           $scope.posts.push({
                  title: $scope.title,
                  upvotes: 0
                });

           //after submit, clear input
           $scope.title = '';
           };
    $scope.upVote = function (index) {
        $scope.posts[index].upvotes += 1;
    };

//    $scope.comments = posts.comments;


}]);