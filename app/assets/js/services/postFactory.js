angular.module('lobsterChat').factory('postFactory', function(localStorageService) {
  //Factory for storing data in local storage

  var initializePosts = function(){
      return [
      //Dummy posts
        // { 
        //   id: 0,
        //   text: 'Being a crustacean is really hard dude. I really hate how people treat me!', 
        //   comments: [
        //     {
        //       id: 0,
        //       text: 'wow',
        //       timestamp: (new Date(2014, 1, 12)).getTime()
        //     },
        //     { 
        //       id: 1,
        //       text: 'such comment', 
        //       timestamp: (new Date(2014, 10, 12)).getTime()
        //     }
        //   ],
        //   timestamp: (new Date(2014, 2, 12)).getTime()
        // },
        // {
        //   id: 1,
        //   text: 'Being a crustacean is really hard dude. I really hate how people treat me!Being a crustacean is really hard dude. I really hate how people treat me!', 
        //   comments: [],
        //   timestamp: (new Date(2015, 2, 12)).getTime()
        // }
      ]
    };
  return { 
    getPosts: function(){
      // Check local storage for posts, if none, 
      // fill with dummyposts from above

      var posts = localStorageService.get('posts');

      if (posts == null) {
        posts = initializePosts();
        localStorageService.set('posts', posts);
      }

      return posts;
    },

    updatePosts: function(posts){
      localStorageService.set('posts', posts);
    },

    showPost: function(postId) {
      var posts = localStorageService.get('posts');

      return posts[postId];
    },

    updateComments: function(postId, comments){
      var posts = localStorageService.get('posts');
      posts[postId].comments = comments;
      localStorageService.set('posts', posts);
    }
  }
});