angular.module('memoApp').controller('memoWriteController', function($stateParams, $scope, $state, storage ){
    $scope.write = function(content){
        if(!content){
            alert('본문을 입력해주세요.');
            $("textarea").focus();
            return;
        };

        //마지막 번호 구해 저장하기.
        storage.writeMemo(content).then(function(data){
            if(data) {
                $state.go('list');
            } else {
                //오류인 경우 따로 핸들링하기.
            }
        });
    };
});
