app.factory('suggestionsService', [function(){
    var suggestionsService = {
        posts: [
            {
                title: 'Free pizza at club meetings',
                upvotes: 15,
                comments: []
            },
            {
                title: 'End all club emails with Laffy Taffy jokes',
                upvotes: 9,
                comments: []
            },
            {
                title: 'Retrofit water fountain with Gatorade',
                upvotes: 3,
                comments: []
            },
            {
                title: 'Sing Bon Jovis "Living on a Prayer" halfway through meetings',
                upvotes: 7,
                comments: []
            },
            {
                title: 'Sing  "Living on a Prayer" halfway ',
                upvotes: 2,
                comments: []
            },
            {
                title: 'Bon  "Living "   meetings',
                upvotes: 1,
                comments: []
            }
        ]
    };
    return suggestionsService;
}]);  
