angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('CfopCtrl', function($scope,$ionicHistory,$location,$state,$stateParams,CfopService) {

  $ionicHistory.nextViewOptions({

  disableBack: true
});


  var lista=CfopService.getAll();

  $scope.cfops=lista.filter(function(item){return item.idPai==$stateParams.idPai});

  $scope.print=function(){
    console.log(CfopService.getAll());
  };

  $scope.goHome=function(){
    $ionicHistory.clearHistory();
    $ionicHistory.clearCache();
    $state.go("app.cfop",{'idPai':0});
  };


})

.controller('IcmsCtrl', function($scope) {

$scope.data={valorProdutoSemIcms:0.00
  ,valorProdutoComIcms:0.00
  ,aliquotaIcms:17
  ,aliquotaIpi:5
  ,total:0.0
  ,baseIcms:0.0
  ,baseIpi:0.0
  ,valorIcms:0.0
  ,valorIpi:0.0
  ,valorNota:0.0
  ,consumidorFinal:true
};


$scope.embutirIcms=function(){
  try{

    var aliquotaIpiValor=(parseFloat($scope.data.aliquotaIpi.toString().replace(",","."))/100);
    var aliquotaIcmsValor=(parseFloat($scope.data.aliquotaIcms.toString().replace(",","."))/100);

    var indiceIcms=1/(1-(aliquotaIcmsValor*(1+aliquotaIpiValor)));
    var valorConvertido=$scope.data.valorProdutoSemIcms*indiceIcms;
    $scope.data.valorProdutoComIcms=valorConvertido.toString().replace(".",",");


    var baseIcmsValor=0.0;
    var baseIpiValor=valorConvertido;
    var valorIcmsValor=0.0;
    var valorIpiValor=valorConvertido*aliquotaIpiValor;
    var valorNotaValor=0.0;




    if($scope.data.consumidorFinal)
    {
      baseIcmsValor=valorConvertido+valorIpiValor;
    }
    else
    {
      baseIcmsValor=valorConvertido;
    }

    valorIcmsValor=baseIcmsValor*aliquotaIcmsValor;


    //Valor da Nota
    valorNotaValor=valorConvertido+valorIpiValor;

    $scope.data.baseIpi=baseIpiValor.toString().replace(".",",");
    $scope.data.baseIcms=baseIcmsValor.toString().replace(".",",");
    $scope.data.valorIpi=valorIpiValor.toString().replace(".",",");
    $scope.data.valorIcms=valorIcmsValor.toString().replace(".",",");
    $scope.data.valorNota=valorNotaValor.toString().replace(".",",");

    console.log(valorConvertido,baseIpiValor,baseIcmsValor,valorIpiValor,valorIcmsValor);


  }catch(ex){
    $scope.data.valorProdutoComIcms="Erro:"+ex;
  }
};


});
