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
            var fuser = {
                uname: vm.user.uname,
                pass: vm.user.pass, 
                fname: vm.user.fname,
                lname: vm.user.lname,
                age: vm.user.age,
                email: vm.user.email,
                pno: vm.user.pno
            };
            UserService.Create(fuser, function (response) {
                if (response.success) {
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
