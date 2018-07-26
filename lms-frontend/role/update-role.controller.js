(function () {
    'use strict';

    angular
        .module('app')
        .controller('UpdateRoleController', UpdateRoleController);

    UpdateRoleController.$inject = ['$location',  'UserService', 'FlashService'];
    function UpdateRoleController($location, UserService, FlashService) {
        var vm = this;

        vm.updaterole = updaterole;
        
        function updaterole() {
            vm.dataLoading = true;
            UserService.UpdateUserRole(vm.ur.uname, "ADMIN", function (response) {
                if (response.data=="") {
                    FlashService.Success('Role Updated Successfully', true);
                    $location.path('/admin');
                } else {
                        FlashService.Error('Role could not be issued. Please try again');
                        vm.dataLoading = false;
                }
                });
   
            }
        }

})();
