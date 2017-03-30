/**
 * Created by Lenovo on 3/30/2017.
 */
(function () {
  angular
    .module('BlogApp', [])
    .controller('BlogController', BlogController);




    function BlogController($scope){
        $scope.createPost = createPost;
        $scope.deletePost = deletePost;
        $scope.deleteAll = deleteAll;
        $scope.selectPost = selectPost;
        $scope.updatePost = updatePost;
        $scope.post = {};
        $scope.blogPosts = [];

        function updatePost(post) {
            $scope.blogPosts[$scope.indexPost].title = post.title;
            $scope.blogPosts[$scope.indexPost].body = post.body;
            $scope.post = {};
        }

        function selectPost(post) {
            $scope.indexPost = $scope.blogPosts.indexOf(post);
            console.log($scope.indexPost);
            $scope.post.title = post.title;
            $scope.post.body  = post.body;
        }

        function deleteAll() {
            $scope.blogPosts = [];
        }
        function createPost (post) {
            console.log(post);
            var newPost = {
                title: post.title,
                body: post.body
            };
            $scope.blogPosts.push(newPost);

        }
        function deletePost (post) {
            console.log(post);
            var indexPost = $scope.blogPosts.indexOf(post);
            $scope.blogPosts.splice(indexPost, 1);
        }

    }
})();