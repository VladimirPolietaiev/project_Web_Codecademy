describe("service test", function () {

    beforeEach(angular.mock.module("SuggestionBox"));

    it("to be services", function () {

        angular.mock.inject(function (suggestionsService) {
            expect(suggestionsService.posts.upvotes).toBeDefined();
        });
    });
    console.log(" suggestionsService",suggestionsService);
});