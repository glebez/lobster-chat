angular.module('lobsterChat')
.controller('PostShowController', 
function(postFactory, $scope, $routeParams){
  $scope.post = postFactory.showPost($routeParams.id);
  $scope.comments = $scope.post.comments;

  $scope.addComment = function(){
    //Restricting to post empty posts
    if (!$scope.comment.text || $scope.comment.text == '') { return; }

    //Continue comments id numeration. If no comments exist, start from 0
    var id = $scope.comments.length ? $scope.comments[($scope.comments.length-1)]['id'] + 1 : 0;
    
    //Pushing new post to the posts array and updating it in local storage
    $scope.comments.push({ 
                        id: id,
                        text: $scope.comment.text, 
                        timestamp: Date.now()
                      });
    postFactory.updateComments($scope.post.id, $scope.comments);
    
    //Clear out the form
    $scope.comment.text = '';
    $scope.commentForm.$setPristine();
  };

  
});