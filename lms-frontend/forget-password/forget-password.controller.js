(function () {
    'use strict';

    angular
        .module('app')
        .controller('ForgetPasswordController', ForgetPasswordController);

    ForgetPasswordController.$inject = ['$location', 'UserService', 'FlashService'];
    function ForgetPasswordController($location, UserService, FlashService) {
        var vm = this;

        vm.forgetpass = forgetpass;
        vm.check;
        function forgetpass() {
            vm.dataLoading = true;
            UserService.CheckPno(vm.pno, function (response) {
                if (response.data) {
                    UserService.CheckPnoTrue(vm.pno, function (response) {
                            vm.check = true;
                            vm.user = response.data;
                    });
                } else {
                            vm.check = false;
                            FlashService.Error("No user with that phone number exists . Please try again");
                    }
                });
                vm.dataLoading = false;
            }
        }

})();
