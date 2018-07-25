(function () {
    'use strict';

    angular
        .module('app')
        .controller('SeeIssuedBooksController', SeeIssuedBooksController);

    SeeIssuedBooksController.$inject = ['$location', '$rootScope', 'UserService', 'FlashService'];
    function SeeIssuedBooksController($location, $rootScope, UserService, FlashService) {
        var vm = this;

        vm.seeibooks = seeibooks;
        
        initController();
        
        function initController() {
            if($rootScope.globals.currentUser.role== "USER" || $rootScope.globals.currentUser.role=="user") {
                vm.dataLoading = true;
                vm.check = true;
                UserService.GetUserBooks($rootScope.globals.currentUser.username, function (response) {
                    vm.details = response.data;
                    });
            }
        }

        function seeibooks() {
            vm.dataLoading = true;
            vm.check = false;
            UserService.GetUserBooks(vm.seeibooks.uname, function (response) {
                vm.details = response.data;
                });
            }
        }

})();
