angular.module('lobsterChat')
.controller('PostsIndexController', 
function(postFactory, $scope){
  $scope.posts = postFactory.getPosts();

  $scope.addPost = function(){
    //Restricting to post empty posts
    if (!$scope.text || $scope.text == '') { return; }

    //Continue post id numeration. If no posts exist, start from 0
    var id = $scope.posts.length ? $scope.posts[($scope.posts.length-1)]['id'] + 1 : 0;
    
    //Pushing new post to the posts array and updating it in local storage
    $scope.posts.push({ 
                        id: id,
                        text: $scope.text, 
                        comments: [],
                        timestamp: Date.now()
                      });
    postFactory.updatePosts($scope.posts);
    
    //Clear out the form
    $scope.text = '';
    $scope.postForm.$setPristine();
  };
});