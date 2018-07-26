(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.register = register;

        vm.unamecheck = unamecheck;

        function unamecheck() {
            vm.dataLoad = true;
            UserService.CheckUname(vm.user.uname, function (response) {
                if (!response.success) {
                    vm.check = true;
                    FlashService.Success('Username is valid', true);
                } else {
                    vm.check = false;
                    FlashService.Error('Username has already been taken. Please choose another username');
                }
            vm.dataLoad = false;
            });
        }
        
        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user, function (response) {
                if (response.data=="") {
                    FlashService.Success('Registration successful', true);
                    $location.path('/login');
                } else {
                    FlashService.Error('Registration unsuccessful. Please try again');
                    vm.dataLoading = false;
                }
            });
        }
    }

})();
