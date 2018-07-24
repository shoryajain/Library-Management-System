(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'UserService', 'FlashService'];
    function LoginController($location, AuthenticationService, UserService, FlashService) {
        var vm = this;

        vm.login = login;
        vm.settingrole = settingrole;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function settingrole() {
            UserService.GetUserRole(vm.username, function(response) {
                vm.role = response.data.role;
                if(vm.role == "admin" || vm.role == "ADMIN") {
                    $location.path('/admin');
                }
                else {
                    $location.path('/user');
                }
                AuthenticationService.SetCredentials(vm.username, vm.password, vm.role);
           });
        }

        function login() {
            vm.dataLoading = true;
            vm.role;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.data) {
                    settingrole(vm.username);
                } else {
                    FlashService.Error("Wrong Username or Password. Please try again");
                    vm.dataLoading = false;
                }
            });
        }
    }

})();
