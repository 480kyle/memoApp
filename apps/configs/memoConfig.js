//config를 통해 ui-router를 사용한다.
angular.module('memoApp').config(function($stateProvider, $urlRouterProvider) {

  //$urlRouterProvider를 통해, 아래의 url에 없는 요청인 경우 /list로 요청하도록 해주는 urlRouterProvider 서비스의 otherwise 메소드
  $urlRouterProvider.otherwise('/list');

  //$stateProvider를 이용하여, url과 상태를 맵핑시킨 결과로 특정 ui-view를 보여줄 수 있도록 한다.
  // /view/123/abc <- 에서, 123이 key로 캡쳐된다. stateProvider를 통해 {param} 또는
  // /:param으로 표현하는 경우, 해당 key를 바인딩시켜주어 받아온 값을 angular context에서 사용할 수 있게 된다.
  $stateProvider
    .state('list', {
      url: '/list',
      templateUrl: '/templates/list.html'
    })
    .state('write', {
      url: '/write',
      templateUrl: '/templates/write.html'
    })
    .state('view', {
      url: '/view/{memoId}',
      templateUrl: '/templates/view.html'
    })
    .state('modify', {
      url: '/modify/{memoId}',
      templateUrl: '/templates/modify.html'
    });
});
