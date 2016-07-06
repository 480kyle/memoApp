angular.module('memoApp').factory("storage",function($q) {
  //서비스에서 객체를 리턴하여 scope별 데이터를 컨트롤할 수 있도록 한다. $scope 서비스를 넣어줄 필요 없음
  return {
    // getFooList : function() {
    //   var promise = $q(function( resolve, reject ) {
    //     try {
    //       var list = localStorage.key(i);
    //       resolve( list );
    //     } catch (e) {
    //       reject( e );
    //     }
    //   });
    //
    //   return promise;
    // },
    //
    // return new Promise(funtion( resolve, reject ) {
    //
    // });

    getMemoId : function($stateParams) {
        console.log('getMemoId()');
        return $q(function(resolve, reject){
            try {
                var memoId = $stateParams.memoId, content = localStorage.getItem(memoId);
                resolve(contents);
            } catch (e) {
                reject(e);
            }
        });

    },
    getMemoList : function() {
        console.log('getMemoList()');
        return $q(function(resolve, reject){
            try {
                var contents = [], k, v;
                for(var i = 0; i < localStorage.length; i++) {
                  k = localStorage.key(i);
                  v = localStorage.getItem(k);
                  contents.push({k, v});
                }
                resolve(contents);
            } catch (e) {
                reject(e);
            }
        });
    },
    getMemo : function(memoId) {
        console.log('getMemo()');
        return $q(function(resolve, reject){
            try {
                resolve(localStorage.getItem(memoId));
            } catch (e) {
                reject(e);
            }
        });
    },
    writeMemo : function(content) {
        console.log('writeMemo()');
        return $q(function(resolve, reject){
            try {
                var memoId = 0;
                for(i in localStorage) { memoId = i; }
                memoId = parseInt(memoId) + 1;
                localStorage.setItem(memoId, content)
                resolve(true);
            } catch (e) {
                console.log(e);
                reject(false);
            }
        });
    },
    modifyMemo : function(memoId, content) {
        console.log('modifyMemo()');
        return $q(function(resolve, reject){
            try {
                localStorage.setItem(memoId, content)
                resolve(true);
            } catch (e) {
                console.log(e);
                reject(false);
            }
        });
    },
    deleteMemo : function(memoId) {
        console.log('deleteMemo()');
        return $q(function(resolve, reject){
            try {
                localStorage.removeItem(memoId);
                resolve(true);
            } catch (e) {
                console.log(e);
                reject(false);
            }
        });
    }
  }
});
