angular.module('memoApp').controller('memoViewController', function($stateParams, $scope, storage){
    //이것은 return을 받고 있기 때문에 property라고 보면 되겠지..
    //현재 스코프의 view에서 {{content}}라고 선언하면 해당 내용을 불러올 수 있다.
    //만약 input을 받는 엘리먼트여서 양방향 바인딩을 해야하는 경우, ng-model 디렉티브를 이용하여
    //현재 스코프에 저장된 내용을 persistance layer로 보낼 수 있는 준비를 마칠 수 있게 된다.

    storage.getMemo($stateParams.memoId).then(function(data){
        $scope.content = data;
    });
});
