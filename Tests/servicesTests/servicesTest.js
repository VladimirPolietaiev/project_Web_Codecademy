
// describe("service test", function () {
//
//     beforeEach(angular.mock.module("SuggestionBox"));
//
//     it("to be services", function () {
//
//         angular.mock.inject(function (suggestionsService) {
//             expect(suggestionsService).toBeDefined();
//         });
//     });
//
// });

"use strict";

describe("reddit api service", function () {
    var suggestionsService;

    // beforeEach(module("SuggestionBox"));
    //
    // beforeEach(inject(function (_suggestionsService_) {
    //     suggestionsService = _suggestionsService_;
    // }));
    // beforeEach(inject(function() {
    //     var $injector = angular.injector(['SuggestionBox.suggestionsService'])
    //
    //     suggestionsService = function() {
    //         return $injector.get('suggestionsService');
    //     }
    // }));

    beforeEach(module('SuggestionBox'));

    beforeEach(inject(function($injector) {
        suggestionsService = function() {
            return $injector.get('suggestionsService');
        }
    }));

    it("should do something", function () {
        // var result = suggestionsService.reverseString("abc");
        // expect(result).toBeDefined();
    });

});