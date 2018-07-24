(function () {
    'use strict';

    angular
        .module('app')
        .controller('SeeIssuedBooksController', SeeIssuedBooksController);

    SeeIssuedBooksController.$inject = ['$location', '$rootScope', 'UserService', 'FlashService'];
    function SeeIssuedBooksController($location, $rootScope, UserService, FlashService) {
        var vm = this;

        vm.seeibooks = seeibooks;
        
        function seeibooks() {
            vm.dataLoading = true;
            vm.seeibooks.role = $rootScope.globals.currentUser.role;
            if(role == "USER" || role=="user") {
                vm.check = true;
                UserService.GetUserBooks($rootScope.globals.currentUser.username, function (response) {
                    vm.details = response.data;
                    });
            }
            else {
                vm.check = false;
                UserService.GetUserBooks(vm.seeibooks.uname, function (response) {
                    vm.details = response.data;
                    });
            }
            }
        }

})();
