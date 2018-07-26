(function () {
    'use strict';

    angular
        .module('app')
        .controller('UserUpdateController', UserUpdateController);

    UserUpdateController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function UserUpdateController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.register = register;
        vm.unamecheck = unamecheck;
        vm.userupdate = userupdate;
        vm.alldetails = alldetails;

        initController();

        function initController() {
            alldetails();
            if($rootScope.globals.currentUser.role=="user" || $rootScope.globals.currentUser.role=="USER") {
                vm.cancel = true;
            }
            else {
                vm.cancel = false;
            }
        }

        function alldetails () {
            UserService.GetByUsername($rootScope.globals.currentUser.username, function (response) {
                vm.user = response.data;
            });
        }
 
        function userupdate() {
            vm.dataLoading = true;
                    UserService.Update(vm.user, function (response) {
                        if(response.data=="") {
                            FlashService.Success('Details Succesfully Updated');
                             $location.path('/login');
                        }
                        else {
                            FlashService.Error('Details could not be updated. Please try again');
                            $location.path('/user-update');
                        }
                    });
            vm.dataLoading = false;    
        }

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
            UserService.Create(vm.user.uname, vm.user.pass, vm.user.fname, vm.user.lname, vm.user.age, vm.user.email, vm.user.pno, function (response) {
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
