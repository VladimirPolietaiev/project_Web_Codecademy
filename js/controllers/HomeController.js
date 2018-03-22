var app = angular.module('SuggestionBox', ['ngRoute']);

app.controller('HomeController', ['$scope','suggestionsService', function($scope, suggestionsService) {

    $scope.posts = suggestionsService.posts;

    $scope.addSuggestion = function() {
        console.log("post",post);
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
    $scope.upVote = function (post) {
        post.upvotes += 1;
    };

//    $scope.comments = posts.comments;


}]);