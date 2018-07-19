(function () {
    'use strict';

    angular
        .module('app')
        .controller('GetRoleController', GetRoleController);

    GetRoleController.$inject = ['$location', 'UserService', 'FlashService'];
    function GetRoleController($location,  UserService, FlashService) {
        var vm = this;

        vm.getrole = getrole;
        
        function getrole() {
            vm.dataLoading = true;
            vm.check = null;
            UserService.GetUserRole(vm.ur.uname, function (response) {
                if (response.data!="") {
                    vm.check = true;
                    vm.ur = response.data;
                } else {
                    FlashService.Error('Role could not be viewed. Please try again');
                }
                vm.dataLoading = false;
                });
   
            }
        }

})();
