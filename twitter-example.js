if (Meteor.isClient) {
  angular.module('twitter-example',['angular-meteor']);

  angular.module('twitter-example').controller('TweetsCtrl',['$scope','$meteor',function($scope,$meteor) {
    $scope.twitterAccs = $meteor.collection(Meteor.users);

    $scope.clearUsers = function() {
      $scope.twitterAccs = Meteor.call("clearUsers");
    };
    
  }]);
}

if (Meteor.isServer) {
  Meteor.methods({
    clearUsers:function() {
      Meteor.users.remove({});
    }  
  });
}