angular.module('memoApp').controller('memoModifyController', function($stateParams, $scope, $state, storage ){
    //URL로부터 넘어온 파라미터를 가져온 뒤, 해당 컨텐트도 함께 저장시킨다.
    storage.getMemo( $stateParams.memoId ).then(function(data){
      $scope.content = data;
      $scope.memoId = $stateParams.memoId;
    })
    //ui-sref=modify(...) 형태를 통해 view가 그려지고 난 뒤, 연결된 컨트롤러에서 현재 scope에 들어가야하는 컨텐츠를 가져와 처리해준다.
    //현재 영역 내 앵귤러 function에서 사용할 수 있도록 별도의 $scope내 변수 정의
    //ng-model로 view영역에 현재 memoId를 꺼내 넣어주고, function 실행 시 가져와서 수행한다.
    $scope.modifyProcess = function( memoId, content, $scope ){
        storage.modifyMemo( memoId, content, $scope ).then(function(data){
            if(data) {
                $state.go('list');
            } else {
                //처리하기.
            }
        })
    };
});
