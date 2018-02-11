describe('HomeController Test', function () {

    var mockScope = {};
    var controller;
    console.log('mockScope',mockScope);
    beforeEach(angular.mock.module("SuggestionBox"));

    beforeEach(angular.mock.inject(function ($controller, $rootScope) {

        mockScope = $rootScope.$new();

        controller = $controller("HomeController", {
           $scope: mockScope

        });

    }));

    console.log(" 777",mockScope);

/*    it('create upvotes', function () {
        expect(mockScope.posts).toBeDefined();
        // expect(mockScope.posts.upvotes(0)).toEqual(0);

    });*/

/*    it("add uovotes", function () {

        mockScope.upVote();
        mockScope.upVote();
        expect(mockScope.posts.upvotes).toEqual(2);

    });*/
    
});
