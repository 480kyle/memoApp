angular.module('memoApp').controller('memoListController', function($scope, $state, storage){
    //list state로 전환될 때 현재 저장되어있는 데이터를 저장시킨다.
    storage.getMemoList().then(function( data ){
        $scope.contents = data;
    });

    // 삭제 버튼 클릭 시 수행 - 서비스의 메소드를 호출한 결과 돌려받는 객체를 화면에 보여주도록 한다.
    $scope.deleteMemo = function(memoInfo){
        if(confirm('삭제 시 복구할 수 없습니다. 계속하시겠습니까?')) {
            storage.deleteMemo( memoInfo.memoId ).then(function(data){
                //삭제 완료된 경우
                if(data) {
                    storage.getMemoList().then(function(data){
                        $scope.contents = data;
                    });
                } else {
                //삭제되지 않은 경우
                }
            });
        }
    };
});
